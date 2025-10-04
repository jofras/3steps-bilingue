// Signup.js

// Maybe have separate sheets per sport - but talk to Kevin about that

export default function SignupPage() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="font-heading text-4xl text-primary mb-6 text-center">
        Sign Up
      </h1>

      <div className="bg-white rounded-lg shadow p-6">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSf8upODTWWLeG0cc8l_jcbNZn4B1CDn-_cJLj0pRi7Z1lkROA/viewform?embedded=true"
          width="100%"
          height="1556"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          className="rounded"
          title="Signup Google Form"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}
