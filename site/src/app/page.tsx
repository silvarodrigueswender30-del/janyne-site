import { Navbar } from "@/components/layout/Navbar";
import { About } from "@/components/sections/About";
import { Hero } from "@/components/sections/Hero";
import { IdentityStrip } from "@/components/sections/IdentityStrip";
import { TherapyRelevance } from "@/components/sections/TherapyRelevance";
import { IndividualPsychotherapy } from "@/components/sections/IndividualPsychotherapy";
import { Approach } from "@/components/sections/Approach";
import { Process } from "@/components/sections/Process";
import { FrequentlyAskedQuestions } from "@/components/sections/FrequentlyAskedQuestions";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/layout/Footer";

export default function Home() { return <><Navbar /><main><Hero /><IdentityStrip /><About /><TherapyRelevance /><IndividualPsychotherapy /><Approach /><Process /><FrequentlyAskedQuestions /><FinalCTA /></main><Footer /></>; }
