import React, { useState } from 'react';

const SummarizeButton = ({ text, summarizedText, setSummarizedText }) => {
    const [summarizer, setSummarizer] = useState(null);
    const [loading, setLoading] = useState(false); // <-- Loading state

    const initializeSummarizer = async () => {
        if (!('ai' in self && 'summarizer' in self.ai)) {
            console.log('Summarizer API is not available');
            return;
        }

        const available = (await self.ai.summarizer.capabilities()).available;

        if (available === 'no') {
            console.log('Summarizer API is not usable.');
            return;
        }

        const options = {
            sharedContext: '',
            type: 'tl;dr',
            format: 'plain-text',
            length: 'short',
        };

        let summarizerInstance;
        if (available === 'readily') {
            summarizerInstance = await self.ai.summarizer.create(options);
        } else {
            summarizerInstance = await self.ai.summarizer.create(options);
            summarizerInstance.addEventListener('downloadprogress', (e) => {
                console.log(`Downloaded ${e.loaded} of ${e.total} bytes.`);
            });
            await summarizerInstance.ready;
        }

        setSummarizer(summarizerInstance);
    };

    const handleSummarize = async () => {
        if (loading) return; 
        setLoading(true);

        if (!summarizer) {
            console.log('Summarizer is not initialized. Initializing now...');
            await initializeSummarizer();
        }

        if (summarizer) {
            const summary = await summarizer.summarize(text, {
                context: 'This article is intended for a tech-savvy audience.',
            });
            setSummarizedText(summary);
        }

        setLoading(false);
    };

    return (<>
        <button onClick={handleSummarize} disabled={loading}>
            {loading ? 'Summarizing...' : 'Summarize'}
            
        </button>
        </>
    );
};

export default SummarizeButton;
