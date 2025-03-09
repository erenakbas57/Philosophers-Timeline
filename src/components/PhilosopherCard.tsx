
import { Link } from 'react-router-dom';
import { Philosopher, getLifeSpan } from '@/lib/philosophers';
import { useAnimatedScroll } from '@/hooks/useAnimatedScroll';

interface PhilosopherCardProps {
  philosopher: Philosopher;
  index: number;
}

const PhilosopherCard = ({ philosopher, index }: PhilosopherCardProps) => {
  const { ref, isVisible } = useAnimatedScroll<HTMLDivElement>({
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  });
  
  // Apply different animation delay based on index
  const getAnimationDelay = () => {
    return `${(index % 3) * 100}ms`;
  };

  return (
    <div 
      ref={ref} 
      className={`philosopher-card ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{ 
        transitionDelay: getAnimationDelay(),
      }}
    >
      <Link to={`/philosopher/${philosopher.id}`} className="block h-full">
        <div className="overflow-hidden">
          <img 
            src={philosopher.imageSrc} 
            alt={philosopher.name} 
            className="philosopher-image h-40"
            onError={(e) => {
              // Fallback for image loading errors
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=1000&auto=format&fit=crop";
            }}
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-1">{philosopher.name}</h3>
          <p className="text-xs text-muted-foreground mb-2">
            {getLifeSpan(philosopher)}
          </p>
          
          <h4 className="text-sm font-semibold mb-1">Ana Fikirleri</h4>
          {
            philosopher.mainIdeas.map((idea) => (
              <p key={idea} className="text-xs line-clamp-2 text-foreground/80">
                {idea}
              </p>
            ))
          }
          <h4 className="text-sm font-semibold mb-1">Eserleri</h4>
            {
              philosopher.notableWorks.map((work) => (
                <p key={work} className="text-xs line-clamp-2 text-foreground/80">
                  {work}
                </p>
              ))
            }
        </div>
      </Link>
    </div>
  );
};

export default PhilosopherCard;
