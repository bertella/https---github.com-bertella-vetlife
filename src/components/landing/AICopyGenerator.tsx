"use client";

import { useState } from "react";
import { Sparkles, Loader2, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { generateConversionCopy } from "@/ai/flows/generate-conversion-copy-flow";
import { useToast } from "@/hooks/use-toast";

export function AICopyGenerator() {
  const [type, setType] = useState<'headline' | 'cta' | 'benefit' | 'faq_answer'>('cta');
  const [loading, setLoading] = useState(false);
  const [variations, setVariations] = useState<string[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const { toast } = useToast();

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const result = await generateConversionCopy({
        elementType: type,
        context: type === 'cta' ? 'Solicitar turno veterinaria' : type === 'headline' ? 'Veterinaria en Córdoba' : 'Beneficios de Animal Life',
        numVariations: 3,
      });
      setVariations(result.variations);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "No se pudo generar el copy. Intenta de nuevo.",
      });
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <Card className="border-primary/20 bg-secondary/30 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-primary">
          <Sparkles className="w-5 h-5" />
          Generador de Copy IA
        </CardTitle>
        <CardDescription>
          Genera variaciones de copy optimizadas para tus anuncios o landing page.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <Select value={type} onValueChange={(v: any) => setType(v)}>
            <SelectTrigger className="w-full sm:w-[200px] bg-background">
              <SelectValue placeholder="Tipo de elemento" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="headline">Título (Headline)</SelectItem>
              <SelectItem value="cta">Llamado a la acción (CTA)</SelectItem>
              <SelectItem value="benefit">Beneficio</SelectItem>
              <SelectItem value="faq_answer">Respuesta FAQ</SelectItem>
            </SelectContent>
          </Select>
          <Button 
            onClick={handleGenerate} 
            disabled={loading}
            className="w-full sm:w-auto font-bold"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Sparkles className="w-4 h-4 mr-2" />}
            Generar Variaciones
          </Button>
        </div>

        {variations.length > 0 && (
          <div className="space-y-3 mt-4 animate-in fade-in slide-in-from-top-4">
            {variations.map((v, i) => (
              <div 
                key={i} 
                className="flex items-center justify-between p-3 bg-background rounded-md border border-border group hover:border-primary/40 transition-colors"
              >
                <p className="text-sm font-medium pr-4">{v}</p>
                <Button 
                  size="icon" 
                  variant="ghost" 
                  onClick={() => copyToClipboard(v, i)}
                  className="shrink-0"
                >
                  {copiedIndex === i ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}