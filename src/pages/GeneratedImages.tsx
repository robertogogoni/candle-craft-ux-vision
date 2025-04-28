
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Gallery, Loader } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface GeneratedImage {
  prompt: string;
  output: string[];
}

const GeneratedImages = () => {
  const [images, setImages] = useState<GeneratedImage[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const generateImages = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('generate-images');
      
      if (error) {
        throw new Error(error.message);
      }
      
      if (data && data.results) {
        setImages(data.results);
        toast({
          title: 'Success!',
          description: 'Images generated successfully',
          variant: 'default',
        });
      }
    } catch (error) {
      console.error('Error generating images:', error);
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to generate images',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 md:px-6 py-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-serif font-semibold text-lumiaro-blue-dark mb-4">
            AI-Generated Candle Imagery
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore beautiful AI-generated imagery showcasing our candle collection in various settings and styles.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <Button 
            onClick={generateImages} 
            disabled={loading}
            className="px-6 py-3 bg-lumiaro-blue hover:bg-lumiaro-blue-dark text-white font-medium rounded-lg transition-all duration-300 flex items-center space-x-2"
          >
            {loading ? (
              <>
                <Loader className="animate-spin mr-2" size={20} />
                <span>Generating...</span>
              </>
            ) : (
              <>
                <Gallery className="mr-2" size={20} />
                <span>Generate New Images</span>
              </>
            )}
          </Button>
        </div>

        {loading && (
          <div className="flex flex-col items-center justify-center py-10">
            <Loader className="animate-spin text-lumiaro-blue w-12 h-12 mb-4" />
            <p className="text-gray-600">Generating beautiful candle imagery...</p>
            <p className="text-sm text-gray-500 mt-2">This may take up to 30-60 seconds</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-xl">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={Array.isArray(image.output) ? image.output[0] : image.output} 
                  alt={`Generated candle image ${index + 1}`}
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-gray-600 italic">"{image.prompt}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GeneratedImages;
