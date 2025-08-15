import React from 'react';
import { motion } from 'framer-motion';
import styles from './ConferenceTracks.module.css';

const ConferenceTracks = () => {
    const tracks = [
        {
            id: 1,
            title: "Track 1",
            subtitle: "Applied Signal Processing",
            content: "Track Chair- Dr. P. Krishna, NSUT, New Delhi Co- Chair- Dr. V. Anil Kimar Signal Processing for Communications, Control Theory & Applications, Smart Grid Applications, Mobile Signal Processing, Radar & Array Processing, Seismic Signal Processing, Information Theory."
        },
        {
            id: 2,
            title: "Track 2",
            subtitle: "Machine Learning and Modelling of Signal Analysis",
            content: "Track Chair- Dr. Taimoor Khan, NIT, Silchar Co- Chair- Dr. Dinesh Sharma Adaptive filtering, Distributed Sensing and Processing, Automated Pattern Analysis, AI Based Signal Analysis. Natural Language Processing, Neural Networks and Applications, Pervasive Computing and Ambient Intelligence, Reasoning and Evolution, Semantic Web Techniques and Technologies, Web Intelligence Applications and Search."
        },
        {
            id: 3,
            title: "Track 3",
            subtitle: "Trending Technologies in Signal Processing",
            content: "Track Chair- Dr. Purnima K Sharma, SVEC, Tadepalligudem Co- Chair- Dr. Parvinder Kaur Big Data, Deep Learning, Digital Home, Immersive Computing, Green Signal Processing, Open-Source Tools, IoT, Autonomous Vehicles, Wearable Device, Social & Cloud Signal, Processing, M2M, web3.0."
        },
        {
            id: 4,
            title: "Track 4",
            subtitle: "Biomedical Signal Processing",
            content: "Chair- Dr. Amar Partap Singh, SLIET, Longowal Co- Chair- Dr. Dinesh Sharma, CCET (Degree Wing), Chandigarh. Bio-Signal Processing, 3D/4D Modelling, Multi-Modal Analysis, Digital Pathology, Medical Image Processing, Multi-Dimensional Reconstruction, Health Informatics, Computer-Aided"
        },
        {
            id: 5,
            title: "Track 5",
            subtitle: "AI application in System design",
            content: "Track Chair: Dr Sanjeev Dehli University/Dr. Alka Jindal, PEC Chandigarh Co-Chair: Dr. Shilpa Jindal Use of Artificial intelligence covering Industry-5.0, Smart Cities, Smart Transportation, Smart Energy Smart Agriculture, smart healthcare systems, embedded systems, IoT, communication system"
        },
        {
            id: 6,
            title: "Track 6",
            subtitle: "VLSI Design",
            content: "Track Chair:Prof. Sanjay Marwha, SLIET Longowal Co-Chair: Er. Hardeep Saini Reconfigurable Computing/FPGA, Network on Chip, System on Chip. Design, Modelling and Simulation of Digital/Analogue IC, VLSI Circuits and Systems, CAD for VLSI, Interconnect Modelling and Algorithms, Micro-Electro-Mechanical Systems, Mixed Analogue/Digital Systems. Power Optimization Techniques, Reconfigurable Hardware Design, ASIC & System on Chip, CMOS-based RF VLSI Design, VLSI architecture Design, implementation & testing, Pervasive and mobile computing, Wide Band gap Semiconductors for Power electronics, and electrical vehicles."
        },
        {
            id: 7,
            title: "Track 7",
            subtitle: "Communication system design",
            content: "Track Chair: Dr. Javaid Ahmad Sheikh Co- Chair: Dr. Sarita Sharma Kashmir University optoelectronic and photonic systems, free space optics, underwater optical wireless communication, optical communication and networks, ultra-wide band systems, sensor network systems, , microwave passive component system, ground radar system design, antenna design."
        },
        {
            id: 8,
            title: "Track 8",
            subtitle: "Green Energy Technologies",
            content: "Track Chair: Dr Vinay Kumar, Thapar University Co-Chair: Dr. Irfan A Khan Renewable Energy, Green Design, Products and Manufacturing Processes, Emerging and Advanced Green Energy Technologies, Energy Efficient Designs and Standards, Renewable Energy Supply and Technologies, Energy Management Systems, Green Technologies in Information, Green Energy in Transport, Sustainable Cities, Architecture and Green Buildings, Green Nanotechnology, Rural Development through Green Energy."
        },
        {
            id: 9,
            title: "Track 9",
            subtitle: "Special Session:",
            content: "The ICSPED-2026 team plans to hold special sessions on various areas of expertise. Special session proposals are invited related to broad area of ICSPED-2026 or theme of the conference. Proposal submitter must have expertise in the proposed area. The proposals will be judged by the ability to bring together the key researchers in the state-of-the-art area, further development of the area, and help in establishing a larger research community beyond the area."
        }
    ];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.2
            }
        }
    };

    const trackVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className={styles.body}>
            <motion.div
                className={styles.container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                variants={containerVariants}
            >
                <motion.div
                    className={styles.mainTitle}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut", bounce: 0.4 }}
                >
                    Conference Tracks
                </motion.div>

                {/* Tracks */}
                {tracks.map((track) => (
                    <motion.div
                        key={track.id}
                        className={styles.trackSection}
                        variants={trackVariants}
                        whileHover={{
                            scale: 1.03,
                            boxShadow: "0 10px 25px rgba(94, 8, 71, 0.15)",
                            background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)"
                        }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    >
                        <motion.div
                            className={styles.trackTitle}
                            whileHover={{
                                scale: 1.05,
                                color: "#5e0847",
                                transition: { duration: 0.2 }
                            }}
                        >
                            {track.title}
                        </motion.div>
                        <div className={styles.trackSubtitle}>{track.subtitle}</div>
                        <div className={styles.trackContent}>{track.content}</div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default ConferenceTracks;
