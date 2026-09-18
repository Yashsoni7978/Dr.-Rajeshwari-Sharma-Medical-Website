import Link from "next/link";
import { Stethoscope, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-ivory text-slateBlue-900 flex flex-col items-center justify-center p-4 text-center">
      <div className="w-16 h-16 rounded-2xl bg-slateBlue-500 text-gold flex items-center justify-center mb-6 shadow-md border border-gold/40">
        <Stethoscope className="w-8 h-8" />
      </div>

      <span className="text-xs font-bold text-gold-dark bg-gold-subtle px-3 py-1 rounded-full border border-gold/30 mb-3">
        404 — Page Not Found
      </span>

      <h1 className="font-heading font-bold text-3xl sm:text-4xl text-slateBlue-900 mb-2">
        Requested Medical Page Not Found
      </h1>

      <p className="text-sm text-slateBlue-700 max-w-md mb-8 font-normal leading-relaxed">
        The page you are looking for might have been moved, renamed, or is currently unavailable. Please return to the Dr. Rajeshwari Sharma Practice homepage.
      </p>

      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-slateBlue-500 hover:bg-slateBlue-600 text-ivory px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-md border border-gold/40"
      >
        <ArrowLeft className="w-4 h-4 text-gold" />
        <span>Return to Practice Homepage</span>
      </Link>
    </div>
  );
}
