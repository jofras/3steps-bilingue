// TeamMemberCard.js

export default function TeamMemberCard({
  imageSrc,
  name,
  age,
  roles,
  quote,
}) {
  return (
    <div className="max-w-3xl mx-auto px-4 mb-16">
      <div className="flex flex-col md:flex-row gap-6">
        {/* image */}
        <img
          src={imageSrc}
          alt={name}
          className="w-full md:w-64 aspect-square rounded-lg object-cover object-top shadow-md"
        />

        {/* text block: name, age, roles */}
        <div className="flex-1 flex flex-col justify-center items-center text-center">
          <h3 className="text-4xl font-heading text-primary leading-tight">
            {name}
            {age && (
              <span className="block text-sm font-semibold font-body text-gray-500 mt-1">
                {age} years old
              </span>
            )}
          </h3>

          <div className="mt-4 space-y-1 text-textmid text-md font-medium max-w-xl">
            {roles.map((role, idx) => (
              <p key={idx}>{role}</p>
            ))}
          </div>
        </div>
      </div>

      {/* quote */}
      {quote && (
        <div className="mt-8 px-4">
          <p className="text-textdark text-base italic">“{quote}”</p>
        </div>
      )}
    </div>
  );
}