const Footer = () => {
    return (
        <footer className="background-primary text-white">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-on-primary">About Me</h3>
                        <p className="text-sm text-gray-400 text-on-primary">
                            We are a leading company in delivering quality solutions for businesses.
                            Our goal is to ensure your success with innovative strategies and tailored solutions.
                        </p>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-on-primary">Contact Us</h3>
                        <p className="text-sm text-gray-400 text-on-primary">Email: info@example.com</p>
                        <p className="text-sm text-gray-400 text-on-primary">Phone: +123 456 789</p>
                    </div>

                    {/* Kirimkan Pesan Section */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-on-primary">Kirimkan Pesan</h3>
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="message" className="block text-sm text-gray-400 text-on-primary mb-1">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    className="w-full p-2 rounded-lg background-default focus:outline-none text-default"
                                    placeholder="Tulis pesan Anda di sini"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="px-4 py-2 background-secondary rounded-full text-on-secondary"
                            >
                                Kirim Pesan
                            </button>
                        </form>
                    </div>
                </div>
                <div className="border-t backround-default mt-8 pt-4 text-center text-sm text-on-primary">
                    © 2024 Your Company. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
