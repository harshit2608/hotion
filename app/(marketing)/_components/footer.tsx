import { Button } from '@/components/ui/button';
import Logo from './logo';

const Footer = () => {
  return (
    <div className="flex items-center justify-between w-full p-6 bg-background z-50 dark:bg-[#1f1f1f]">
      <Logo />
      <div className="flex-grow text-center">
        <Button asChild variant="ghost" size="sm">
          <a
            href="https://harshit2608.github.io/portfolio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Built by Harshit Bargujar
          </a>
        </Button>
      </div>

      <div className="w-full md:w-auto flex justify-end items-center gap-x-2 text-muted-foreground">
        <Button variant="ghost" size="sm">
          Privacy Policy
        </Button>
        <Button variant="ghost" size="sm">
          Terms & Conditions
        </Button>
      </div>
    </div>
  );
};

export default Footer;
