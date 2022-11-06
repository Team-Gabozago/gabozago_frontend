interface Flexbox {
    dir: 'row' | 'column';
    jc: string;
    ai: string;
}

export const flexbox = ({ dir = 'row', jc, ai }: Partial<Flexbox>) => `
    display: flex;
    flex-direction: ${dir};
    justify-content: ${jc};
    align-items: ${ai};
`;

export const inlineFlexbox = ({ dir = 'row', jc, ai }: Partial<Flexbox>) => `
    display: inline-flex;
    flex-direction: ${dir};
    justify-content: ${jc};
    align-items: ${ai};
`;

/* typography */
