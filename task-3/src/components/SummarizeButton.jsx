import React, { useState } from 'react';

const SummarizeButton = ({ text, summarizedText, setSummarizedText }) => {
    const [summarizer, setSummarizer] = useState(null);
    const [loading, setLoading] = useState(false);

    const initializeSummarizer = async () => {
        try {
            if (!('ai' in self && 'summarizer' in self.ai)) {
                console.error('Summarizer API is not available.');
                return null;
            }

            const capabilities = await self.ai.summarizer.capabilities();
            console.log("Summarizer capabilities:", capabilities);
            if (!capabilities.available) {
                console.error("Summarizer API is not usable.");
                return null;
            }

            const options = {
                sharedContext: '',
                type: 'tl;dr',
                format: 'plain-text',
                length: 'short',
            };

            let summarizerInstance;
            if (capabilities.available === 'readily') {
                summarizerInstance = await self.ai.summarizer.create(options);
            } else {
                summarizerInstance = await self.ai.summarizer.create(options);
                summarizerInstance.addEventListener('downloadprogress', (e) => {
                    console.log(`Downloaded ${e.loaded} of ${e.total} bytes.`);
                });
                await summarizerInstance.ready;
            }

            console.log("Summarizer initialized successfully.");
            return summarizerInstance;
        } catch (error) {
            console.error("Error initializing summarizer:", error);
            return null;
        }
    };

    const handleSummarize = async () => {
        if (loading) return; 
        setLoading(true);

        try {
            let summarizerInstance = summarizer;

            if (!summarizerInstance) {
                console.log("Summarizer is not initialized. Initializing now...");
                summarizerInstance = await initializeSummarizer();
                setSummarizer(summarizerInstance); // Store it in state
            }
            if (!summarizer.ready) {
                console.warn("Summarizer is not fully ready. Waiting...");
                await summarizer.ready;
            }
            if (summarizerInstance) {
                console.log("Starting summarization for text:", text);
                const summary = await summarizerInstance.summarize(text, {
                    context: 'This article is intended for a tech-savvy audience.',
                });
                setSummarizedText(summary);
                console.log("Summarization completed:", summary);
            } else {
                console.error("Summarizer still not available after initialization.");
            }
        } catch (error) {
            console.error("Summarization failed:", error);
        }

        setLoading(false);
    };

    return (
        <>
            <button onClick={handleSummarize} disabled={loading}>
                {loading ? 'Summarizing...' : 'Summarize'}
            </button>
        </>
    );
};

export default SummarizeButton;
