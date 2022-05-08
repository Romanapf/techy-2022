
export type HeaderProps = {
    title: string
    url: string

}

export const Header: React.FC<HeaderProps> = ({ title, url }) => {
    return (
        <header className="w-full px-20">
            <div className="bg-header flex items-center justify-between w-full py-5">
                <img src="/logo-techy.svg" alt="logo" className="w-max" />
                <ul className="title flex">
                    <li>Techy Info</li>
                    <li><a href="/cartel">Cartel</a></li>
                   
                </ul>
            </div>
        </header>
    )
}


