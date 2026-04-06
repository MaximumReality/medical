const CH8_DATA = {
    num: 8,
    title: "Muscular System",
    accentColor: "#e74c3c", // Muscle Red
    sections: [
        {
            label: "SKELETAL MUSCLE PHYSIOLOGY",
            content: "Understanding how a nerve impulse becomes a physical contraction at the cellular level.",
            details: [
                "**Neuromuscular Junction (NMJ)**: The synapse where Acetylcholine (ACh) is released to trigger a contraction.",
                "**Acetylcholinesterase (AChE)**: The enzyme that breaks down ACh to allow the muscle to relax.",
                "**Sarcoplasmic Reticulum**: The specialized ER that stores and releases Calcium ($Ca^{2+}$).",
                "**Muscle Metabolism**: Creatine Phosphate (15s energy), Anaerobic Glycolysis (Lactic acid), and Aerobic Respiration (Efficiency)."
            ]
        },
        {
            label: "THE SARCOMERE & CONTRACTION",
            content: "The sarcomere is the functional unit of contraction where actin and myosin interact.",
            image: "img/ch10_sarcomere.PNG", 
            details: [
                "**Myosin**: The 'Thick' filament with 'heads' that pull on actin.",
                "**Actin**: The 'Thin' filament that slides toward the center (M-line).",
                "**Sliding Filament Theory**: Myosin heads bind to actin (Cross-bridge), pull (Power Stroke), and release using ATP.",
                "**Troponin & Tropomyosin**: The 'lock' on the actin; Calcium is the 'key' that moves them out of the way."
            ]
        },
        {
            label: "MUSCLE ACTIONS & ATTACHMENTS",
            content: "Muscles generate movement by pulling on bones across a joint (the fulcrum).",
            details: [
                "**Origin**: The stationary attachment point (usually proximal).",
                "**Insertion**: The movable attachment point (usually distal); it moves toward the origin.",
                "**Agonist (Prime Mover)**: The leader responsible for a specific movement.",
                "**Antagonist**: The muscle that opposes or reverses a movement (e.g., Triceps opposes Biceps).",
                "**Synergist**: Helps the prime mover by adding force or stabilizing the joint."
            ]
        },
        {
            label: "SUPERFICIAL MUSCLE MAP & CLINICAL SITES",
            content: "Overview of the primary muscles and their clinical significance in nursing.",
            image: "img/ch11_muscle_map.PNG", 
            details: [
                "**Anterior Muscles**: Pectoralis Major, Rectus Abdominis, Quadriceps Femoris.",
                "**Posterior Muscles**: Trapezius, Latissimus Dorsi, Gluteus Maximus, Gastrocnemius.",
                "**IM Injection Sites**: Key nursing sites include the **Deltoid** (shoulder), **Vastus Lateralis** (lateral thigh), and **Ventral Gluteal** (hip).",
                "**Diaphragm**: The most important muscle for respiration; separates the thoracic and abdominal cavities."
            ]
        }
    ],
    vocab: [
        {t: "Sarcomere", d: "The region between two Z-discs; the unit of contraction."},
        {t: "Aponeurosis", d: "A broad, sheet-like tendon connecting muscles to other structures."},
        {t: "Hypertrophy", d: "Increase in muscle fiber diameter due to use."},
        {t: "Atrophy", d: "Degeneration of muscle tissue due to disuse or nerve damage."},
        {t: "Myoglobin", d: "Oxygen-binding protein found in muscle sarcoplasm."},
        {t: "Oxygen Debt", d: "The amount of oxygen required after exercise to restore pre-exercise conditions."}
    ],
    questions: [
        {
            q: "What role does Calcium play in the Sliding Filament Theory?",
            opts: ["It provides ATP for the power stroke", "It binds to troponin to expose actin binding sites", "It breaks down Acetylcholine", "It forms the Z-line"],
            ans: 1,
            exp: "Calcium is the 'on switch' for contraction by moving the regulatory proteins."
        },
        {
            q: "Which muscle is the standard site for intramuscular injections in the lateral thigh?",
            opts: ["Biceps Femoris", "Rectus Abdominis", "Vastus Lateralis", "Gastrocnemius"],
            ans: 2,
            exp: "The Vastus Lateralis is a preferred IM site, especially in pediatric patients."
        }
    ]
};
