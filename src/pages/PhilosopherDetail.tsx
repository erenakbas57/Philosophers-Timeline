
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchPhilosopherById } from '@/lib/api';
import { formatYear } from '@/lib/philosophers';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { philosophers } from '@/lib/philosophers';

const PhilosopherDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
const philosopher = philosophers.find(p => p.id === id);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container max-w-4xl mx-auto py-10 px-4 animate-fade-in">
        <Button 
          variant="ghost" 
          onClick={handleBack}
          className="mb-6 flex items-center gap-2"
        >
          <ArrowLeft size={16} />
          <span>Geri Dön</span>
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="rounded-xl overflow-hidden mb-6">
              <img 
                src={philosopher.imageSrc} 
                alt={philosopher.name} 
                className="w-full h-auto object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=1000&auto=format&fit=crop";
                }}
              />
            </div>
            
            <div className="bg-card p-4 rounded-lg shadow-sm mb-6">
              <h3 className="font-medium text-lg mb-2">Kişisel Bilgiler</h3>
              <div className="space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <span className="text-muted-foreground text-sm">Doğum:</span>
                  <span className="text-sm">{formatYear(philosopher.birthYear)}</span>
                </div>
                {philosopher.deathYear && (
                  <div className="grid grid-cols-2 gap-2">
                    <span className="text-muted-foreground text-sm">Ölüm:</span>
                    <span className="text-sm">{formatYear(philosopher.deathYear)}</span>
                  </div>
                )}
                <div className="grid grid-cols-2 gap-2">
                  <span className="text-muted-foreground text-sm">Dönem:</span>
                  <span className="text-sm">{philosopher.era}</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <span className="text-muted-foreground text-sm">Milliyet:</span>
                  <span className="text-sm">{philosopher.nationality}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2 space-y-8">
            <div>
              <h1 className="text-4xl font-serif font-bold mb-4">{philosopher.name}</h1>
              <blockquote className="border-l-4 border-primary pl-4 italic text-foreground/80 mb-6">
                "{philosopher.quote}"
              </blockquote>
              <p className="text-foreground/90 leading-relaxed whitespace-pre-line">{philosopher.bio}</p>
            </div>
            
            <div>
              <h2 className="text-2xl font-serif font-bold mb-4">Ana Fikirleri</h2>
              <ul className="list-disc list-inside space-y-2">
                {philosopher.mainIdeas.map((idea, index) => (
                  <li key={index} className="text-foreground/90">{idea}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-serif font-bold mb-4">Önemli Eserleri</h2>
              <ul className="list-disc list-inside space-y-2">
                {philosopher.notableWorks.map((work, index) => (
                  <li key={index} className="text-foreground/90">{work}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PhilosopherDetail;
