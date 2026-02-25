import FinalCTA from "../FinalCTA";
import Hero from "../Hero";
import HowItWorks from "../HowItWork";
import ImportanceIndex from "../Importance/ImportanceIndex";

export default function HomeIndex() {
    return (
<div className="bg-[#0A1326] text-white min-h-screen">
            <Hero />
            <ImportanceIndex/>
            <HowItWorks/>
            <FinalCTA/>
</div>
    )
}