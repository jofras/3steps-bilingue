// Signup.js

// Maybe have separate sheets per sport - but talk to Kevin about that

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto py-8 md:py-16 px-4">
      <h1 className="font-heading text-4xl text-primary mb-6 text-center">
        Contact Us
      </h1>

      <div className="bg-white rounded-lg shadow p-6">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScXLF2D_35xkR3Olhpw49KU6q0S3ulteASOo6p9qWX0kuR9Hw/viewform?embedded=true"
          width="100%"
          height="1326 md:1226"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          className="rounded"
          title="Contact Google Form"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}
