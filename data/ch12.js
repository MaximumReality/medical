const CH12_DATA = {
    num: 12,
    title: "Nervous Tissue",
    accentColor: "#34495e", // Deep Neural Blue
    sections: [
        {
            label: "NEURONS & NEUROGLIA",
            content: "The nervous system has two main cell types: Neurons (the talkers) and Neuroglia (the helpers).",
            details: [
                "**Neurons**: Electrically excitable cells. Parts include the **Cell Body**, **Dendrites** (receivers), and **Axon** (sender).",
                "**CNS Glia**: Astrocytes (blood-brain barrier), Oligodendrocytes (myelin), Microglia (immune), Ependymal (CSF).",
                "**PNS Glia**: Schwann cells (myelin) and Satellite cells (support).",
                "**Clinical Note**: Multiple Sclerosis (MS) is an autoimmune disease that destroys the myelin sheath in the CNS."
            ]
        },
        
        {
            label: "NERVE IMPULSE SPEED",
            content: "Not all nerves send signals at the same speed. It depends on the 'wrapping'.",
            details: [
                "**Myelin Sheath**: A fatty 'insulation' that allows signals to jump instead of crawl.",
                "**Nodes of Ranvier**: The gaps in the myelin where the actual 'jumping' happens.",
                "**Saltatory Conduction**: The name for the 'jumping' signal. It's much faster than an unmyelinated signal.",
                "**Clinical Note**: Multiple Sclerosis (MS) is a disease where the immune system attacks the Myelin, slowing down or stopping nerve signals."
            ]
        },
         {
            label: "ELECTRICAL SIGNALING: THE ACTION POTENTIAL",
            content: "The electrical signal that travels down an axon. It follows an 'All-or-None' principle.",
            image: "img/ch12_action_potential.JPG", 
            details: [
                "**Resting State**: -70mV. High Sodium (Na+) outside, High Potassium (K+) inside.",
                "**The Threshold (-55mV)**: The 'Point of No Return.' If the stimulus reaches this, the nerve MUST fire.",
                "**Depolarization**:  Na+ channels open, Na+ rushes in, charge goes to +30mV.",
                "**Repolarization**:  K+ channels open, K+ rushes out, charge returns toward negative.",
                "**Hyperpolarization**: The 'undershoot' where the cell becomes briefly more negative than resting. (A brief 'time-out' where the cell goes below -70mV so it can't fire again too fast)."
            ]
        },
        {
            label: "SYNAPTIC TRANSMISSION",
            content: "How a signal jumps from one neuron to the next.",
            details: [
                "**Presynaptic Neuron**: Sends the signal via neurotransmitters in vesicles.",
                "**Synaptic Cleft**: The tiny gap between neurons.",
                "**Postsynaptic Neuron**: Receives the signal via chemical-gated receptors.",
                "**EPSP vs IPSP**: Excitatory signals push the cell toward a fire; Inhibitory signals prevent it."
            ]
        },
        
{
    label: "THE AUTONOMIC NERVOUS SYSTEM",
    content: "Controls involuntary functions via the Sympathetic and Parasympathetic branches.",
    image: "img/ch12_autonomic.png", 
    details: [
        "**Sympathetic**: 'Fight or Flight' (dilates pupils, increases heart rate).",
        "**Parasympathetic**: 'Rest and Digest' (constricts pupils, slows heart rate).",
        "**Dual Innervation**: Most organs receive instructions from both branches."
    ]
}

    ],
    vocab: [
        {t: "Myelin Sheath", d: "Lipid/protein insulation that increases nerve impulse speed."},
        {t: "Nodes of Ranvier", d: "Gaps in the myelin sheath where action potentials 'jump' (Saltatory Conduction)."},
        {t: "Threshold", d: "The voltage (-55mV) required to trigger an action potential."},
        {t: "Synapse", d: "The site of communication between two neurons."},
        {t: "Grey Matter", d: "Contains neuronal cell bodies and unmyelinated axons."},
        {t: "White Matter", d: "Contains myelinated axons; the 'highways' of the brain."},
        {t: "Refractory Period", d: "The short time after a signal where a nerve cannot fire again."},
        {t: "Synaptic Cleft", d: "The tiny physical gap between two neurons."},
        {t: "Neurotransmitters", d: "Chemicals like Dopamine or Serotonin that jump the gap."},
        {t: "Efferent Neurons", d: "Motor neurons that carry signals AWAY from the brain to muscles."}
    ],
    questions: [
        {
            q: "Which neuroglial cell is responsible for forming the Myelin Sheath in the CNS?",
            opts: ["Schwann Cell", "Astrocyte", "Oligodendrocyte", "Microglia"],
            ans: 2,
            exp: "Oligodendrocytes myelinating the CNS; Schwann cells do the PNS."
        },
        {
            q: "What is the typical threshold voltage required to trigger an action potential?",
            opts: ["-70mV", "-55mV", "+30mV", "0mV"],
            ans: 1,
            exp: "-55mV is the 'magic number' where voltage-gated Na+ channels pop open."
        }
    ]
};
