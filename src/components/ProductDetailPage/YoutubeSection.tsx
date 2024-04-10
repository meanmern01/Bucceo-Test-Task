

const YoutubeSection = () => {
    return (
        <div className="pb-10">
            <div className="bg-[#f9fbff] border border-[#d3e1ed] px-7 py-12 rounded-lg flex gap-1 flex-col text-center">
                <p className="text-[20px] font-semibold tracking-tight">Empfohlener redaktioneller Inhalt</p>
                <p className="text-[18px] font-medium tracking-tight">An dieser Stelle finden Sie einen externen Inhalt von YouTube, der die Seite ergänzt.</p>
                <p className="text-[16px] font-normal tracking-tight">Ich bin damit einverstanden, dass mir Inhalte von YouTube angezeigt werden. Personenbezogene Daten können an Drittplattformen übermittelt werden. Mehr dazu in unserer <a href="javascript:volid(0)" className="text-[16px] font-normal text-[#2870cc] underline tracking-tight">Datenschutzerklärung</a>.</p>
            </div>
            <div className="flex justify-center mt-4">
                <button className="p-2.5 bg-[#e2e2e2] rounded-lg text-[18px] tracking-tight font-medium leading-none">YouTube-Inhalte erlauben</button>
            </div>
        </div>
    )
}

export default YoutubeSection