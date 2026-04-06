const CH12_DATA = {
    num: 12,
    title: "Nervous Tissue & Physiology",
    accentColor: "#34495e", 
    sections: [
        {
            label: "NEURONAL STRUCTURE & NEUROGLIA",
            content: "The nervous system relies on neurons for signal transmission and neuroglia for physiological support.",
            details: [
                "**Neurons**: Composed of a **Cell Body (Soma)**, **Dendrites** (input), and a single **Axon** (output).",
                "**CNS Glia**: **Astrocytes** (Blood-Brain Barrier), **Oligodendrocytes** (Myelin), **Microglia** (Phagocytosis), and **Ependymal Cells** (CSF production).",
                "**PNS Glia**: **Schwann Cells** (Myelin) and **Satellite Cells** (Support).",
                "**Clinical Note**: Multiple Sclerosis (MS) involves the immune-mediated destruction of CNS myelin, impairing saltatory conduction."
            ]
        },
        {
            label: "ELECTROPHYSIOLOGY: THE ACTION POTENTIAL",
            content: "Action potentials are 'all-or-none' electrochemical events used for cellular communication.",
            image: "img/ch12_action_potential.JPG", 
            details: [
                "**Resting Membrane Potential**: -70mV. Maintained by the **Na+/K+ Pump** (3 Na+ out / 2 K+ in).",
                "**Threshold (-55mV)**: The critical voltage required to open voltage-gated Sodium channels.",
                "**Depolarization**: Rapid **Na+ Influx** causes the membrane potential to peak at approximately +30mV.",
                "**Repolarization**: **K+ Efflux** restores the negative internal charge.",
                "**Hyperpolarization**: A brief period where the potential drops below -70mV, creating the **Refractory Period**."
            ]
        },
        {
            label: "IMPULSE PROPAGATION & SYNAPTIC FUNCTION",
            content: "Signal velocity and transmission between cells depend on anatomical structures and chemical messengers.",
            details: [
                "**Saltatory Conduction**: The rapid 'jumping' of an impulse between **Nodes of Ranvier** in myelinated axons.",
                "**Synaptic Transmission**: Release of neurotransmitters from the **Presynaptic Neuron** into the **Synaptic Cleft**.",
                "**Neurotransmitters**: Bind to receptors on the **Postsynaptic** membrane to trigger EPSPs (excitatory) or IPSPs (inhibitory).",
                "**Removal**: Neurotransmitters are removed via reuptake or enzymatic degradation (e.g., Acetylcholinesterase)."
            ]
        },
        {
            label: "THE AUTONOMIC NERVOUS SYSTEM (ANS)",
            content: "The ANS regulates homeostasis through involuntary control of smooth muscle, cardiac muscle, and glands.",
            image: "img/ch12_autonomic.png", 
            details: [
                "**Sympathetic**: 'Fight or Flight'—Thoracolumbar origin; increases HR, BP, and bronchodilation.",
                "**Parasympathetic**: 'Rest and Digest'—Craniosacral origin; stimulates digestion and lowers HR.",
                "**Dual Innervation**: Most visceral organs receive antagonistic input from both branches to maintain balance."
            ]
        }
    ],
    vocab: [
        {t: "Saltatory Conduction", d: "The rapid propagation of action potentials along myelinated axons."},
        {t: "Threshold Stimulus", d: "Minimum voltage (-55mV) required to generate an action potential."},
        {t: "Neuroglia", d: "Non-neuronal cells that maintain homeostasis and provide protection for neurons."},
        {t: "Summation", d: "The additive effect of multiple electrical impulses on a single postsynaptic neuron."},
        {t: "White Matter", d: "Regions of the brain and spinal cord containing dense collections of myelinated fibers."},
        {t: "Grey Matter", d: "Regions containing mostly cell bodies and unmyelinated fibers."}
    ],
    questions: [
        {
            q: "Which neuroglial cell is responsible for forming the Myelin Sheath in the Peripheral Nervous System (PNS)?",
            opts: ["Oligodendrocyte", "Astrocyte", "Schwann Cell", "Ependymal Cell"],
            ans: 2,
            exp: "Schwann cells myelinate the PNS; Oligodendrocytes myelinate the CNS."
        },
        {
            q: "During which phase of the action potential do voltage-gated Potassium (K+) channels open?",
            opts: ["Depolarization", "Repolarization", "Resting State", "Threshold"],
            ans: 1,
            exp: "K+ efflux during repolarization brings the cell back toward its negative resting potential."
        }
    ]
};
