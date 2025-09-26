import Pat from "../../public/images/pat.png";

const bulletPoints = ["Fun to be in", "Easy to manage", "Always growing"];

export default function Waitlist() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "2rem",
        alignItems: "center",
      }}
      className="bg-gradient-to-b from-[#06B6D4] to-[#2563EB] rounded-lg mt-12"
    >
      {/* Left: Image */}
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <img
          src={Pat}
          alt="Waitlist"
          style={{ width: "100%", maxWidth: 400, borderRadius: "1rem" }}
        />
      </div>

      {/* Right: Content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <h2 className="text-white font-bold text-2xl">
          PAT is more than a bot. She&apos;s your community&apos;s secret
          weapon. She makes your Telegram community
        </h2>
        <ul style={{ marginBottom: "1.5rem"}}>
          {bulletPoints.map((point, idx) => (
            <li
              key={idx}
              className="text-white text-md flex items-center gap-2 my-2"
            >
              <span className="inline-block w-2 h-2 bg-white rounded-full mt-2"></span>

              {point}
            </li>
          ))}
        </ul>
        <button
          style={{
            padding: "0.75rem 1.5rem",
            background: "#0078D4",
            color: "#fff",
            borderRadius: "0.5rem",
            cursor: "pointer",
            fontWeight: "bold",
          }}
          className="border border-white hover:bg-white hover:text-primary transition-all duration-300"
        >
          Join Now
        </button>
      </div>

      {/* Responsive styles */}
      <style>
        {`
                    @media (max-width: 768px) {
                        div[style*="grid-template-columns"] {
                            grid-template-columns: 1fr;
                        }
                        div[style*="justify-content: center"] {
                            margin-bottom: 2rem;
                        }
                    }
                `}
      </style>
    </div>
  );
}
