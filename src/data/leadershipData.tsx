import alexFraylonImg from '../assets/images/leadership/alex-fraylon.jpg';
import vigneswarImg from '../assets/images/leadership/vigneswar-nalluri.jpg';

export interface Leader {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export const leadershipData: Leader[] = [
  {
        name: "Ch. Ram Teja",
        role: "Chief Executive Officer",
        image: alexFraylonImg,
        bio: "Visionary leader with 20+ years of experience in driving global digital transformation and enterprise growth."
    },
    {
        name: "Vigneswar Nalluri",
        role: "Chief Technology Officer",
        image: vigneswarImg,
        bio: "Pioneering AI architect focused on building scalable, future-ready infrastructure for the modern enterprise."
    },
    {
        name: "Michael Ross",
        role: "Chief Operating Officer",
        image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800",
        bio: "Expert in operational strategy and supply chain optimization, ensuring seamless delivery across global markets."
    },
    {
        name: "Priya Patel",
        role: "Head of Product",
        image: "https://images.pexels.com/photos/1181682/pexels-photo-1181682.jpeg?auto=compress&cs=tinysrgb&w=800",
        bio: "Design-led product strategist dedicated to creating intuitive user experiences that solve complex business problems."
    },
    {
        name: "David Kim",
        role: "VP of Engineering",
        image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=800",
        bio: "Systems engineering veteran specialized in high-performance computing and cybersecurity protocols."
    },
    {
        name: "Elena Rodriguez",
        role: "Chief Marketing Officer",
        image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=800",
        bio: "Strategic storyteller building global brand equity through data-driven insights and creative innovation."
    }
];