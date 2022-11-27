import * as S from './ProgressBar.style';

export interface ProgressBarprops {
    width: number;
    backgroundColor: string;
    backgroundImage: string;
}

export const ProgressBar = ({
    width,
    backgroundColor,
    backgroundImage,
}: ProgressBarprops) => (
    <S.ProgressBarWrapper>
        <S.Foreground
            width={width}
            backgroundColor={backgroundColor}
            backgroundImage={backgroundImage}
        />
    </S.ProgressBarWrapper>
);

export default ProgressBar;
