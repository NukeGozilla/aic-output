export const config = {
  matcher: ['/', '/index.html'],
};

export default function middleware(request) {
  const auth = request.headers.get('authorization');
  const expected = 'Basic ' + btoa('viewer:' + (process.env.SITE_PASSWORD || ''));

  if (auth === expected) return;

  return new Response('Authentication required', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="aic-output"' },
  });
}
