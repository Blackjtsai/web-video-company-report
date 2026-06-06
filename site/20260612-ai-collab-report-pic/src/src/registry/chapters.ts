import type { ChapterDef } from "./types";

import EnvironmentChapter from "../chapters/01-environment/Environment";
import { narrations as environmentNarrations } from "../chapters/01-environment/narrations";

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

import ClosingChapter from "../chapters/11-closing/Closing";
import { narrations as closingNarrations } from "../chapters/11-closing/narrations";

export const CHAPTERS: ChapterDef[] = [
  {
    id: "environment",
    title: "大環境",
    narrations: environmentNarrations,
    Component: EnvironmentChapter,
  },
  {
    id: "mindset",
    title: "心態",
    narrations: mindsetNarrations,
    Component: MindsetChapter,
  },
  {
    id: "four-things",
    title: "執行方式",
    narrations: fourThingsNarrations,
    Component: FourThingsChapter,
  },
  {
    id: "phenomena",
    title: "常見現象",
    narrations: phenomenaNarrations,
    Component: PhenomenaChapter,
  },
  {
    id: "harness",
    title: "Prompt→Harness",
    narrations: harnessNarrations,
    Component: HarnessChapter,
  },
  {
    id: "ecosystem",
    title: "生態設計",
    narrations: ecosystemNarrations,
    Component: EcosystemChapter,
  },
  {
    id: "taibuilder",
    title: "TAI-Builder 閉環",
    narrations: taiBuilderNarrations,
    Component: TaiBuilderChapter,
  },
  {
    id: "methodology",
    title: "工法心法",
    narrations: methodologyNarrations,
    Component: MethodologyChapter,
  },
  {
    id: "doctsunami",
    title: "文件海嘯",
    narrations: docTsunamiNarrations,
    Component: DocTsunamiChapter,
  },
  {
    id: "results",
    title: "團隊成果",
    narrations: resultsNarrations,
    Component: ResultsChapter,
  },
  {
    id: "closing",
    title: "下一步",
    narrations: closingNarrations,
    Component: ClosingChapter,
  },
];
