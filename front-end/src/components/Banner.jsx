

function Banner() {
    return (
        <div id="Início">
            <div className="relative z-20 flex bg-scroll bg-cover bg-center overflow-hidden h-screen bg-gray-50" style={{ backgroundImage: "url('./background/home-banner-1.png')" }}>
                <div class="relative mt-8 hidden sm:block">
                    <img src="name-rainbowcare-vector.svg" class="max-w-xs m-auto md:max-w-sm" />
                    <p className="mt-2 mb-10 flex justify-center text-base text-center text-gray-900 font-semibold">
                        A Plataforma de Acolhimento LGBT+ criada com o compromisso<br></br>
                        inabalável de oferecer um espaço seguro, inclusivo e acolhedor para<br></br>
                        todas as pessoas que fazem parte da comunidade e seus aliados.
                    </p>
                </div>
            </div>

            <div className="relative z-20 flex bg-scroll bg-auto overflow-hidden h-screen bg-gray-50" style={{ backgroundImage: "url('./background/home-banner-2.png')" }}>
            </div>
            
            <div className="relative z-20 flex bg-scroll bg-auto overflow-hidden h-screen bg-gray-50" style={{ backgroundImage: "url('./background/home-banner-4.png')" }}>
            </div>
        </div>
    );
}

export default Banner;
