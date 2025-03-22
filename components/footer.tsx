const Footer = () => {
  return (
    <>
      <footer className="py-12 text-secondary-foreground">
        <div className="flex flex-col gap-4 px-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-1 text-lg font-semibold">Voxlet UI Docs</p>
            <p className="text-muted-foreground">
              Built with love by{" "}
              <a
                href="https://bento.me/muhammadkaifnazeer"
                rel="noreferrer noopener"
                target="_blank"
                className="font-medium transition-colors hover:text-foreground underline"
              >
                Muhammad Kaif Nazeer ↗
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
