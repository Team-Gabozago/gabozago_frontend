import 'twin.macro';

export interface ProgressBarprops {
    width: number;
    backgroundColor: string;
}

export const ProgressBar = ({ width, backgroundColor }: ProgressBarprops) => (
    <div className="w-96 h-2 mt-2 rounded-lg overflow-hidden">
        <div
            css={{ width: `${width}px` }}
            className={`h-2 bg-${backgroundColor} transition-[width] duration-500`}
        />
    </div>
);

export default ProgressBar;
