import type { ChapterDef } from "./types";
import HeroChapter from "../chapters/01-hero/Hero";
import { narrations as heroNarrations } from "../chapters/01-hero/narrations";
import MindsetChapter from "../chapters/02-mindset/Mindset";
import { narrations as mindsetNarrations } from "../chapters/02-mindset/narrations";
import FourThingsChapter from "../chapters/03-four-things/FourThings";
import { narrations as fourThingsNarrations } from "../chapters/03-four-things/narrations";
import PhenomenaChapter from "../chapters/04-phenomena/Phenomena";
import { narrations as phenomenaNarrations } from "../chapters/04-phenomena/narrations";
import HarnessChapter from "../chapters/05-harness/Harness";
import { narrations as harnessNarrations } from "../chapters/05-harness/narrations";
import EcosystemChapter from "../chapters/06-ecosystem/Ecosystem";
import { narrations as ecosystemNarrations } from "../chapters/06-ecosystem/narrations";
import TaiBuilderChapter from "../chapters/07-taibuilder/TaiBuilder";
import { narrations as taiBuilderNarrations } from "../chapters/07-taibuilder/narrations";
import MethodologyChapter from "../chapters/08-methodology/Methodology";
import { narrations as methodologyNarrations } from "../chapters/08-methodology/narrations";
import DocTsunamiChapter from "../chapters/09-doctsunami/DocTsunami";
import { narrations as docTsunamiNarrations } from "../chapters/09-doctsunami/narrations";
import ResultsChapter from "../chapters/10-results/Results";
import { narrations as resultsNarrations } from "../chapters/10-results/narrations";
import GovernanceChapter from "../chapters/11-governance/Governance";
import { narrations as governanceNarrations } from "../chapters/11-governance/narrations";
import RoadmapChapter from "../chapters/12-roadmap/Roadmap";
import { narrations as roadmapNarrations } from "../chapters/12-roadmap/narrations";

export const CHAPTERS: ChapterDef[] = [
  { id: "hero",        title: "大環境",     narrations: heroNarrations,        Component: HeroChapter },
  { id: "mindset",     title: "心態定位",   narrations: mindsetNarrations,     Component: MindsetChapter },
  { id: "four-things", title: "四件事",     narrations: fourThingsNarrations,  Component: FourThingsChapter },
  { id: "phenomena",   title: "三個現象",   narrations: phenomenaNarrations,   Component: PhenomenaChapter },
  { id: "harness",     title: "Harness",    narrations: harnessNarrations,     Component: HarnessChapter },
  { id: "ecosystem",   title: "四層架構",   narrations: ecosystemNarrations,   Component: EcosystemChapter },
  { id: "taibuilder",  title: "TAI-Builder",narrations: taiBuilderNarrations,  Component: TaiBuilderChapter },
  { id: "methodology", title: "四大心法",   narrations: methodologyNarrations, Component: MethodologyChapter },
  { id: "doctsunami",  title: "文件海嘯",   narrations: docTsunamiNarrations,  Component: DocTsunamiChapter },
  { id: "results",     title: "實測成果",   narrations: resultsNarrations,     Component: ResultsChapter },
  { id: "governance",  title: "治理挑戰",   narrations: governanceNarrations,  Component: GovernanceChapter },
  { id: "roadmap",     title: "下一步",     narrations: roadmapNarrations,     Component: RoadmapChapter },
];
