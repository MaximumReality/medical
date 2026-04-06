const CH10_DATA = {
    num: 10,
    title: "Muscle Tissue",
    accentColor: "#e74c3c", // Muscle Red
    sections: [
        {
            label: "THE NEUROMUSCULAR JUNCTION (NMJ)",
            content: "The point where a motor neuron meets a muscle fiber. They don't actually touch; they communicate via chemicals.",
            details: [
                "**Acetylcholine (ACh)**: The neurotransmitter released by the neuron to trigger contraction.",
                "**ACh Receptors**: Proteins on the muscle's motor end plate that bind to ACh.",
                "**Acetylcholinesterase (AChE)**: The enzyme that breaks down ACh to stop the contraction.",
                "**Clinical Note**: Myasthenia Gravis is an autoimmune disease that destroys ACh receptors, causing muscle weakness."
            ]
        },
        {
            label: "SLIDING FILAMENT THEORY",
            content: "How muscles actually shorten. It involves thin (Actin) and thick (Myosin) filaments.",
            details: [
                "**The Sarcomere**: The basic functional unit of a myofibril.",
                "**Calcium (Ca²⁺)**: Released from the Sarcoplasmic Reticulum; it binds to Troponin to move Tropomyosin out of the way.",
                "**Cross-Bridge Cycling**: Myosin heads bind to Actin, pull (Power Stroke), and release using ATP.",
                "**Rigor Mortis**: After death, lack of ATP means myosin heads cannot detach from actin, leaving muscles stiff."
            ]
        },
        {
            label: "MUSCLE METABOLISM",
            content: "How muscles get the energy (ATP) to move.",
            details: [
                "**Creatine Phosphate**: Provides a quick burst of ATP (15 seconds).",
                "**Anaerobic Glycolysis**: Breaks down glucose without oxygen; produces Lactic Acid (2 minutes).",
                "**Aerobic Respiration**: High-efficiency ATP production using Oxygen in the mitochondria (Hours)."
            ]
        }
    ],
    vocab: [
        {t: "Sarcomere", d: "The region between two Z-discs; the unit of contraction."},
        {t: "Excitability", d: "The ability of a cell to respond to a stimulus by producing electrical signals."},
        {t: "Myoglobin", d: "Red protein that binds oxygen in muscle fibers."},
        {t: "Twitch", d: "A brief contraction of all muscle fibers in a motor unit in response to one action potential."},
        {t: "Hypertrophy", d: "Increase in the diameter of muscle fibers (building muscle)."},
        {t: "Atrophy", d: "Wasting away of muscles due to disuse or nerve damage."}
    ],
    questions: [
        {
            q: "What ion must be released into the sarcoplasm to trigger a contraction?",
            opts: ["Sodium (Na+)", "Potassium (K+)", "Calcium (Ca2+)", "Chloride (Cl-)"],
            ans: 2,
            exp: "Calcium binds to troponin, which is the 'key' that starts the sliding filament process."
        },
        {
            q: "Which neurotransmitter is used at the Neuromuscular Junction?",
            opts: ["Dopamine", "Serotonin", "Acetylcholine", "Epinephrine"],
            ans: 2,
            exp: "Acetylcholine (ACh) is the specific messenger for skeletal muscle contraction."
        }
    ]
};
