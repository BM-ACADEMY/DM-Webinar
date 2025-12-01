export default function VectorShape() {
    return (
        <svg
            className="absolute left-1/2 -translate-x-1/2  w-[600px] opacity-20"
            viewBox="0 0 600 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M100 250 Q300 100 500 250 T900 250"
                stroke="red"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
