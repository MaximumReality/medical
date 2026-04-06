const CH10_DATA = {
    num: 10,
    title: "Muscle Tissue",
    accentColor: "#e74c3c", // Muscle Red
    sections: [
        {
            label: "THE NEUROMUSCULAR JUNCTION (NMJ)",
            content: "The point where a motor neuron meets a muscle fiber. They communicate via chemical messengers.",
            details: [
                "**Acetylcholine (ACh)**: The neurotransmitter released by the neuron to trigger contraction.",
                "**ACh Receptors**: Proteins on the muscle's motor end plate that bind to ACh.",
                "**Acetylcholinesterase (AChE)**: The enzyme that breaks down ACh to stop the contraction.",
                "**Clinical Note**: Myasthenia Gravis is an autoimmune disease that destroys ACh receptors, causing muscle weakness."
            ]
        },
        {
            label: "THE SARCOMERE & CONTRACTION",
            content: "The sarcomere is the functional unit of skeletal muscle contraction.",
            image: "img/ch10_sarcomere.PNG", 
            details: [
                "**Z-Line**: The boundaries of a single sarcomere.",
                "**Myosin**: The thick filament that pulls on actin.",
                "**Actin**: The thin filament that slides toward the center (M-line).",
                "**Striations**: The visible 'stripes' in muscle caused by the organized pattern of these filaments."
            ]
        },
        {
            label: "SLIDING FILAMENT THEORY",
            content: "The mechanical process of how muscles actually shorten.",
            details: [
                "**Calcium (Ca²⁺)**: Released from the Sarcoplasmic Reticulum; it binds to Troponin to move Tropomyosin.",
                "**Cross-Bridge Cycling**: Myosin heads bind to Actin, pull (Power Stroke), and release using ATP.",
                "**Rigor Mortis**: After death, a lack of ATP means myosin heads cannot detach from actin, leaving muscles stiff."
            ]
        },
        {
            label: "MUSCLE METABOLISM",
            content: "How muscles generate the ATP required for movement.",
            details: [
                "**Creatine Phosphate**: Provides a quick burst of ATP (approx. 15 seconds).",
                "**Anaerobic Glycolysis**: Breaks down glucose without oxygen; produces Lactic Acid.",
                "**Aerobic Respiration**: High-efficiency ATP production occurring in the mitochondria."
            ]
        }
    ],
    vocab: [
        {t: "Sarcomere", d: "The region between two Z-discs; the unit of contraction."},
        {t: "Excitability", d: "The ability of a cell to respond to a stimulus by producing electrical signals."},
        {t: "Myoglobin", d: "Red protein that binds oxygen in muscle fibers."},
        {t: "Twitch", d: "A brief contraction of all muscle fibers in a motor unit."},
        {t: "Hypertrophy", d: "Increase in the diameter of muscle fibers."},
        {t: "Atrophy", d: "Wasting away of muscles due to disuse or nerve damage."}
    ],
    questions: [
        {
            q: "What ion must be released into the sarcoplasm to trigger a contraction?",
            opts: ["Sodium (Na+)", "Potassium (K+)", "Calcium (Ca2+)", "Chloride (Cl-)"],
            ans: 2,
            exp: "Calcium binds to troponin, moving tropomyosin and exposing actin binding sites."
        },
        {
            q: "Which neurotransmitter is used at the Neuromuscular Junction?",
            opts: ["Dopamine", "Serotonin", "Acetylcholine", "Epinephrine"],
            ans: 2,
            exp: "Acetylcholine (ACh) is the specific messenger for skeletal muscle contraction."
        }
    ]
};
