import I from '@/components/common/Icons';

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
        </fieldset>
    );
}
