const CH13_DATA = {
    num: 13,
    title: "Spinal Cord & Spinal Nerves",
    accentColor: "#1abc9c", // Neural Teal
    sections: [
        {
            label: "SPINAL CORD ANATOMY",
            content: "The spinal cord is the primary communication link between the brain and the rest of the body.",
            details: [
                "**Conus Medullaris**: The tapered, cone-shaped end of the spinal cord (around L1-L2).",
                "**Cauda Equina**: 'Horse's Tail'; the collection of nerve roots extending below the spinal cord.",
                "**Gray Matter**: Shaped like an 'H' or butterfly. Contains **Horns** (Posterior = Sensory, Anterior = Motor).",
                "**White Matter**: Divided into **Columns** (Funiculi) containing sensory/motor tracts."
            ]
        },
        {
            label: "SPINAL NERVES & PLEXUSES",
            content: "There are 31 pairs of spinal nerves. They emerge from the cord and often braid together into networks called plexuses.",
            details: [
                "**Cervical Plexus**: Supplies the neck and diaphragm (Phrenic Nerve).",
                "**Brachial Plexus**: Supplies the upper limbs (Radial, Ulnar, Median nerves).",
                "**Lumbar/Sacral Plexus**: Supplies the lower limbs (Femoral and Sciatic nerves).",
                "**Clinical Note**: The Sciatic nerve is the longest and thickest nerve in the body."
            ]
        },
        {
            label: "THE REFLEX ARC",
            content: "A fast, involuntary response to a stimulus. It bypasses the brain for speed.",
            details: [
                "**1. Receptor**: Detects the stimulus.",
                "**2. Sensory Neuron**: Carries impulse to the spinal cord (via Dorsal Root).",
                "**3. Integrating Center**: Gray matter in the cord (may include an Interneuron).",
                "**4. Motor Neuron**: Carries impulse out of the cord (via Ventral Root).",
                "**5. Effector**: The muscle or gland that responds."
            ]
        }
    ],
    vocab: [
        {t: "Meninges", d: "Three protective layers around the cord: Dura Mater, Arachnoid Mater, Pia Mater."},
        {t: "Dermatome", d: "An area of skin that provides sensory input to one specific pair of spinal nerves."},
        {t: "Ganglion", d: "A cluster of neuronal cell bodies located outside the CNS."},
        {t: "Epidural Space", d: "Space between the dura mater and the vertebral wall; site of anesthetic injection."},
        {t: "Monosynaptic", d: "A reflex arc with only one synapse (no interneuron)."},
        {t: "Phrenic Nerve", d: "Nerve that stimulates the diaphragm to allow breathing ('C3, 4, 5 keep the diaphragm alive')."}
    ],
    questions: [
        {
            q: "Sensory information enters the spinal cord through which structure?",
            opts: ["Anterior Root", "Posterior (Dorsal) Root", "Ventral Horn", "Central Canal"],
            ans: 1,
            exp: "The Dorsal Root is strictly for sensory (afferent) input. Think: 'SAD' (Sensory Afferent Dorsal)."
        },
        {
            q: "Damage to the Phrenic Nerve would result in difficulty with:",
            opts: ["Walking", "Swallowing", "Breathing", "Hearing"],
            ans: 2,
            exp: "The Phrenic nerve controls the diaphragm, the primary muscle for respiration."
        }
    ]
};
