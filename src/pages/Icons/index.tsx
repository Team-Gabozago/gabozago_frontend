import I from '@/components/common/Icons';
import theme from '@/styles/theme';

export default function IconPage() {
    return (
        <fieldset style={{ width: 10 }}>
            <legend>
                <h2>Icon Page</h2>
            </legend>
            <div>
                로고
                <br />
                <I.Logo.Small /> <I.Logo.Big />
            </div>
            <br />

            <br />

            <div>
                <I.BackButton />
                <I.Asterisk />
                <I.ReplyComment />
                <I.Create color={theme.color.navy} />
                <I.Edit />
                <I.Profile />
                <I.Search color={theme.color.gray} />
                <I.Cancel color={theme.color.errorText} />
                <I.Conversation />
                <I.Setting />
                <I.Heart color={theme.color.gray} />
                <I.Minus fontSize={0.25} color={theme.color.gray} />
                <I.ArrowUp fontSize={0.25} color={theme.color.gray} />
                <I.ArrowDown fontSize={0.25} color={theme.color.gray} />
                <I.Check fontSize={0.25} color={theme.color.blue} />
                <I.Toggle />
                <I.Home />
            </div>
        </fieldset>
    );
}
