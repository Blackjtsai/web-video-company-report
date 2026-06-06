import type { ChapterDef } from "./types";

import ColDopenChapter from "../chapters/01-coldopen/Coldopen";
import { narrations as coldopenNarrations } from "../chapters/01-coldopen/narrations";

import FourThingsChapter from "../chapters/02-four-things/FourThings";
import { narrations as fourThingsNarrations } from "../chapters/02-four-things/narrations";

import ThreePhenomenaChapter from "../chapters/03-three-phenomena/ThreePhenomena";
import { narrations as threePhenomenaNarrations } from "../chapters/03-three-phenomena/narrations";

import PromptToHarnessChapter from "../chapters/04-prompt-to-harness/PromptToHarness";
import { narrations as promptToHarnessNarrations } from "../chapters/04-prompt-to-harness/narrations";

import AiEcosystemChapter from "../chapters/05-ai-ecosystem/AiEcosystem";
import { narrations as aiEcosystemNarrations } from "../chapters/05-ai-ecosystem/narrations";

import MaturityChapter from "../chapters/06-maturity/Maturity";
import { narrations as maturityNarrations } from "../chapters/06-maturity/narrations";

import LandingChapter from "../chapters/07-landing/Landing";
import { narrations as landingNarrations } from "../chapters/07-landing/narrations";

import ClosingChapter from "../chapters/08-closing/Closing";
import { narrations as closingNarrations } from "../chapters/08-closing/narrations";

export const CHAPTERS: ChapterDef[] = [
  {
    id: "coldopen",
    title: "開場定位",
    narrations: coldopenNarrations,
    Component: ColDopenChapter,
  },
  {
    id: "four-things",
    title: "四件事",
    narrations: fourThingsNarrations,
    Component: FourThingsChapter,
  },
  {
    id: "three-phenomena",
    title: "三個現象",
    narrations: threePhenomenaNarrations,
    Component: ThreePhenomenaChapter,
  },
  {
    id: "prompt-to-harness",
    title: "Prompt 到 Harness",
    narrations: promptToHarnessNarrations,
    Component: PromptToHarnessChapter,
  },
  {
    id: "ai-ecosystem",
    title: "AI 協作生態",
    narrations: aiEcosystemNarrations,
    Component: AiEcosystemChapter,
  },
  {
    id: "maturity",
    title: "成熟度與治理",
    narrations: maturityNarrations,
    Component: MaturityChapter,
  },
  {
    id: "landing",
    title: "落地策略",
    narrations: landingNarrations,
    Component: LandingChapter,
  },
  {
    id: "closing",
    title: "結語",
    narrations: closingNarrations,
    Component: ClosingChapter,
  },
];
