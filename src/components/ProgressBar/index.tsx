import * as S from './ProgressBar.style';

interface ProgressBarprops {
    width: number;
}

export const ProgressBar = ({ width }: ProgressBarprops) => (
    <S.ProgressBarWrapper>
        <S.Foreground width={width} />
    </S.ProgressBarWrapper>
);

export default ProgressBar;
