'use client';

export default function FilteredErrorPage({ error, reset }) {
  console.error('Error caught in error.js:', error);

  return (
    <div id="error">
      <h1>An Error Occurred</h1>
      <p>{error?.message || 'An unexpected error occurred.'}</p>
      <button onClick={() => reset()}>Try Again</button>
    </div>
  );
}
