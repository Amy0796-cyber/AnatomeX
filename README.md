# AnatomeX — Interactive Biological & Anatomical Encyclopedia

**AnatomeX** is a modern, high-precision digital museum and scientific encyclopedia for exploring the internal and external anatomy, physiological systems, and evolutionary adaptations of living organisms across planet Earth.

Designed for students, educators, biological researchers, and curious minds, AnatomeX combines scientific rigor with an interactive museum-grade user experience.

---

## 🌟 Key Features

### 1. Multi-Layer Cross-Section Anatomy Viewer
- **Interactive Multi-System Layers**: Toggle individual anatomical systems or inspect combined views (Integumentary, Skeletal, Muscular, Nervous, Circulatory, Respiratory, Digestive, Specialized).
- **Cross-Section Depth Scrubber**: Continuously peel from outer epidermis/cuticle (0%) through visceral layers down to the deep skeletal/hydrostatic core (100%).
- **Multi-Modal Imaging Modes**:
  - **Standard**: Technical biological illustration with calibrated anatomical rendering.
  - **X-Ray Mode**: Skeletal framework and axial structural transmission.
  - **Metabolic / Thermal Mode**: Metabolic heat distribution and vascular perfusion.
- **Precision Hotspot Pins & Radar Rings**: Clickable anatomical pins with coordinate telemetry, histological cell composition breakdowns, physiological mechanics, and evolutionary origins.
- **Zoom & Inspection Controls**: Pan, zoom up to 2.4x, and inspect pinpoint coordinate readouts.

### 2. Comprehensive Organism Dossiers
- **Taxonomic Rank Classification**: Complete Linnaean taxonomy tree (Kingdom, Phylum, Class, Order, Family, Genus, Species).
- **8 Deep Physiological Systems**: Detailed technical breakdowns for all major organs:
  1. *Integumentary System* (Skin, cuticle, scales, plumage, blubber, shell)
  2. *Skeletal Framework* (Endoskeletons, exoskeletons, hydrostatic skeletons)
  3. *Musculoskeletal Locomotion* (Actin-myosin dynamics, asynchronous resonant flight muscles, myomeres)
  4. *Nervous & Sensory* (Cephalic encephalon, radial arm cords, compound eyes, electroreception)
  5. *Cardiovascular Circuit* (Myogenic hearts, open/closed hemolymph, retia mirabilia heat exchangers)
  6. *Respiratory Gas Exchange* (Tidal lungs, unidirectional air-sac systems, countercurrent gills, tracheae, stomata)
  7. *Digestive & Enteric* (Acidic gastric chambers, spiral valves, honey crops, microbial ceca)
  8. *Specialized Evolutionary Niche* (Snap-trap turgor actuation, cryptobiotic vitrification, venom lancets)
- **Evolutionary Milestones & Verified Trivia**: Key geological adaptations and verified trivia.

### 3. Dynamic Biological AI Synthesis Engine
- **Universal Search**: Search for **any living or prehistoric organism on Earth** (e.g., *Platypus*, *Axolotl*, *Archaeopteryx*, *Komodo Dragon*, *Mimosa pudica*, *Vampire Squid*, *Giant Sequoia*).
- **Server-Side Gemini 3.8 Flash Integration**: Dynamically synthesizes peer-reviewed quality anatomical data, hotspot coordinates, taxonomy, and physiological mechanisms in real-time.

### 4. Cross-Phylum Comparative Anatomy Lab
- Select any two specimens side-by-side (e.g., *Homo sapiens* vs *Balaenoptera musculus*, *Apis mellifera* vs *Carcharodon carcharias*).
- Compare physiological systems, metabolic scaling, and divergent evolutionary adaptations with simultaneous dual inspection.

### 5. Biometric Telemetry & Waveform Simulator
- Live real-time cardiac pulse and gas turnover frequency simulator calibrated to each organism's metabolic scale (from the 720 BPM Peregrine Falcon heart to the 6 BPM Blue Whale diving bradycardia).
- Visual ECG-style waveform telemetry with optional acoustic click synthesis.

### 6. Anatomy Lab Knowledge Challenge
- Interactive examination testing morphological knowledge, respiratory physics, cephalization, and cryptobiosis biochemistry with instant scientific feedback.

### 7. Specimen Archive & Bookmarks
- Personal research archive with localStorage persistence and one-click recall.

---

## 🛠️ Technology Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS v4, Lucide Icons, Motion.
- **Backend**: Node.js, Express, TSX, Vite middlewares.
- **AI Engine**: `@google/genai` TypeScript SDK utilizing `gemini-3.8-flash` with structured JSON schema responses.
- **Audio Synthesis**: Native Web Audio API oscillator synthesis (zero external audio asset dependencies).
- **Typography**: *Cabinet Grotesk* (Display), *Plus Jakarta Sans* (Prose), *JetBrains Mono* (Telemetry & Notation).

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed.

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open `http://localhost:3000` in your web browser.

### Production Build
```bash
npm run build
npm start
```

---

## 🔬 Curated Organism Database Included

| Common Name | Scientific Name | Category | Primary Specialization |
| :--- | :--- | :--- | :--- |
| **Modern Human** | *Homo sapiens* | Mammals | Encephalized Neocortex, Bipedalism & Sweating |
| **Blue Whale** | *Balaenoptera musculus* | Mammals | Lunge-Feeding, Baleen Sieve & Bradycardia |
| **Western Honeybee** | *Apis mellifera* | Invertebrates | Asynchronous Flight Muscles, Honey Crop & Corbicula |
| **Great White Shark** | *Carcharodon carcharias* | Fish | Ampullae of Lorenzini, Squalene Liver & Retia Mirabilia |
| **Peregrine Falcon** | *Falco peregrinus* | Birds | Narial Baffles, 389 km/h Stoop & Air Sac Respiration |
| **Giant Pacific Octopus** | *Enteroctopus dofleini* | Invertebrates | Decentralized Arm Cognition, 3 Hearts & Chromatophores |
| **Green Sea Turtle** | *Chelonia mydas* | Reptiles | Fused Bony Carapace, Salt Glands & 5-Hour Dives |
| **Venus Flytrap** | *Dionaea muscipula* | Plants & Fungi | Bi-stable Snap Trap, Action Potentials & Carnivory |
| **Tardigrade (Water Bear)** | *Hypsibius exemplaris* | Microscopic & Archaea | TDP Bioglass Vitrification & Dsup Chromatin Shield |
| **Moon Jellyfish** | *Aurelia aurita* | Invertebrates | Passive Vortex Recoil, Rhopalia & Nematocysts |
| **Axolotl** | *Ambystoma mexicanum* | Amphibians | Complete Neoteny & Epimorphic Blastema Regeneration |

*Plus infinite additional organisms via the built-in AI Synthesis Engine!*

---

## 📄 License
Apache-2.0 License.
