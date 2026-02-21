import { Github, Linkedin } from 'lucide-react'
import Icon from '@mdi/react'
import {
  mdiLanguageCsharp,
  mdiLanguageJavascript,
  mdiLanguageTypescript,
  mdiLanguagePython,
  mdiPowershell,
  mdiMicrosoftAzure,
  mdiAws,
  mdiTerraform,
  mdiKubernetes,
  mdiReact,
  mdiNodejs,
  mdiDocker,
  mdiDotNet,
  mdiGit,
  mdiLinux,
  mdiBash,
} from '@mdi/js'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import avatarImg from '@/assets/avatar.png'

const socialLinks = [
  {
    title: 'GitHub',
    href: 'https://github.com/sahalsaad',
    icon: Github,
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sahalsaad',
    icon: Linkedin,
  },
]

const techStack = [
  { path: mdiLanguageCsharp, top: '8%', left: '4%', rotate: '-12deg', size: 1.4, opacity: 0.4 },
  { path: mdiLanguageJavascript, top: '15%', left: '52%', rotate: '8deg', size: 1.1, opacity: 0.35 },
  { path: mdiLanguageTypescript, top: '55%', left: '73%', rotate: '-6deg', size: 1.2, opacity: 0.35 },
  { path: mdiLanguagePython, top: '60%', left: '3%', rotate: '10deg', size: 1.2, opacity: 0.35 },
  { path: mdiPowershell, top: '5%', left: '66%', rotate: '-4deg', size: 1, opacity: 0.3 },
  { path: mdiMicrosoftAzure, top: '40%', left: '80%', rotate: '14deg', size: 1.5, opacity: 0.4 },
  { path: mdiAws, top: '70%', left: '58%', rotate: '-8deg', size: 1.1, opacity: 0.3 },
  { path: mdiTerraform, top: '28%', left: '2%', rotate: '6deg', size: 1.1, opacity: 0.35 },
  { path: mdiKubernetes, top: '72%', left: '20%', rotate: '-10deg', size: 1.4, opacity: 0.4 },
  { path: mdiReact, top: '5%', left: '28%', rotate: '12deg', size: 1.2, opacity: 0.35 },
  { path: mdiNodejs, top: '48%', left: '12%', rotate: '-5deg', size: 1, opacity: 0.3 },
  { path: mdiDocker, top: '32%', left: '68%', rotate: '4deg', size: 1.2, opacity: 0.35 },
  { path: mdiDotNet, top: '58%', left: '38%', rotate: '-15deg', size: 1.2, opacity: 0.35 },
  { path: mdiGit, top: '78%', left: '82%', rotate: '-3deg', size: 1.1, opacity: 0.3 },
  { path: mdiLinux, top: '78%', left: '45%', rotate: '7deg', size: 1, opacity: 0.3 },
  { path: mdiBash, top: '12%', left: '85%', rotate: '9deg', size: 0.9, opacity: 0.25 },
]

function ProfileCard() {
  const yearsOfExperience = new Date().getFullYear() - 2015

  return (
    <Card className="relative w-full max-w-md overflow-hidden border-white/60 bg-white/70 backdrop-blur-xl shadow-2xl animate-fade-in-up">
      {/* Gradient header band with tech icons */}
      <div className="h-36 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 relative overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE4YzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02LTYgMi42ODYtNiA2IDIuNjg2IDYgNiA2em0wIDJjLTQuNDE4IDAtOC0zLjU4Mi04LThzMy41ODItOCA4LTggOCAzLjU4MiA4IDgtMy41ODIgOC04IDh6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
        {/* Floating tech icons */}
        {techStack.map(({ path, top, left, rotate, size, opacity }, i) => (
          <Icon
            key={i}
            path={path}
            className="absolute text-white select-none pointer-events-none"
            style={{ top, left, transform: `rotate(${rotate})`, opacity }}
            size={size}
          />
        ))}
      </div>

      {/* Avatar - overlapping the header */}
      <div className="flex justify-center -mt-16 relative z-10 animate-fade-in-up-delay">
        <Avatar className="h-32 w-32 ring-4 ring-white shadow-lg">
          <AvatarImage src={avatarImg} alt="Sahal Saad" />
          <AvatarFallback className="text-2xl font-bold bg-indigo-100 text-indigo-600">
            SS
          </AvatarFallback>
        </Avatar>
      </div>

      <CardContent className="px-8 pb-8 pt-5 text-center">
        {/* Name & Title */}
        <div className="animate-fade-in-up-delay">
          <h1 className="text-2xl font-bold text-slate-800 tracking-tight">
            Sahal Saad
          </h1>
          <p className="text-sm font-medium text-indigo-500 mt-1">
            Full Stack Developer
          </p>
        </div>

        <Separator className="my-5 mx-auto w-16 bg-gradient-to-r from-blue-300 to-indigo-300 h-0.5 rounded-full" />

        {/* Bio */}
        <p className="text-slate-600 text-sm leading-relaxed animate-fade-in-up-delay-2">
          I&apos;m a full stack developer with over{' '}
          <span className="font-semibold text-slate-700">{yearsOfExperience} years</span>{' '}
          of experience. I love experimenting with new technologies and staying
          updated with the latest trends in cyber, web, and information technology.
        </p>

        <Separator className="my-5 mx-auto w-16 bg-gradient-to-r from-blue-300 to-indigo-300 h-0.5 rounded-full" />

        {/* Social Links */}
        <div className="animate-fade-in-up-delay-3">
          <p className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-4">
            Connect with me
          </p>
          <div className="flex justify-center gap-3">
            {socialLinks.map(({ title, href, icon: Icon }) => (
              <a
                key={title}
                href={href}
                title={title}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center h-11 w-11 rounded-xl bg-slate-50 border border-slate-200/80 text-slate-500 transition-all duration-300 hover:bg-indigo-50 hover:border-indigo-200 hover:text-indigo-600 hover:shadow-md hover:shadow-indigo-100 hover:-translate-y-0.5"
              >
                <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              </a>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ProfileCard
