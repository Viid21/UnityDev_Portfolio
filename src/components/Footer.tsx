export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="site-footer">
            <div className="container">
                <p>© {year} David Rey · Unity Gameplay Developer</p>
            </div>
        </footer>
    );
}
