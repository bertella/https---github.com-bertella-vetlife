'use server';
/**
 * @fileOverview This file defines a Genkit flow for generating A/B test variations of conversion-focused copy.
 *
 * - generateConversionCopy - A function that handles the generation of copy variations.
 * - GenerateConversionCopyInput - The input type for the generateConversionCopy function.
 * - GenerateConversionCopyOutput - The return type for the generateConversionCopy function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateConversionCopyInputSchema = z.object({
  elementType: z.enum(['headline', 'cta', 'benefit', 'faq_answer']).describe('The type of landing page element for which copy variations are needed.'),
  context: z.string().describe('The specific text, question, or context for which copy variations are to be generated.'),
  numVariations: z.number().int().min(2).max(10).default(3).describe('The number of A/B test variations to generate (between 2 and 10).'),
  businessName: z.string().default('Animal Life').describe('The name of the business.'),
  location: z.string().default('Nuevo Poeta Lugones, Córdoba, Provincia de Córdoba, Argentina').describe('The business location for local SEO.'),
  address: z.string().default('Damian Garat 2630, X5008AHO Córdoba').describe('The full business address.'),
  phone: z.string().default('0351 232-3695').describe('The business phone number.'),
  objective: z.string().default('Generar consultas por WhatsApp').describe('The main conversion objective for the landing page.'),
  services: z.array(z.string()).default(['Castraciones', 'Cirugías', 'Peluquería canina y felina', 'Atención clínica general', 'Urgencias veterinarias']).describe('List of main services offered.'),
  differentials: z.array(z.string()).default(['Atención rápida', 'Cercanía con el cliente', 'Trato personalizado', 'Enfoque profesional en el cuidado animal']).describe('List of business differentials.'),
});
export type GenerateConversionCopyInput = z.infer<typeof GenerateConversionCopyInputSchema>;

const GenerateConversionCopyOutputSchema = z.object({
  variations: z.array(z.string()).describe('An array of generated copy variations for A/B testing.'),
});
export type GenerateConversionCopyOutput = z.infer<typeof GenerateConversionCopyOutputSchema>;

export async function generateConversionCopy(input: GenerateConversionCopyInput): Promise<GenerateConversionCopyOutput> {
  return generateConversionCopyFlow(input);
}

const copywritingPrompt = ai.definePrompt({
  name: 'generateConversionCopyPrompt',
  input: {schema: GenerateConversionCopyInputSchema},
  output: {schema: GenerateConversionCopyOutputSchema},
  prompt: `Actúa como un desarrollador frontend senior especializado en SEO local, performance web y optimización de conversiones para campañas de Google Ads. Tu tarea es generar varias ({{{numVariations}}}) A/B test variaciones de copy para una landing page de veterinaria, enfocándote en alta conversión.

---
### 📍 Datos del negocio
Nombre: {{{businessName}}}
Ubicación: {{{location}}}
Dirección: {{{address}}}
Teléfono: {{{phone}}}
Objetivo principal de la landing: {{{objective}}}
Servicios principales:
{{#each services}}- {{{this}}}
{{/each}}
Diferenciales:
{{#each differentials}}- {{{this}}}
{{/each}}

---
### 🎯 REQUERIMIENTOS CLAVE
- **SEO LOCAL**: Optimizar para búsquedas como “veterinaria en Nuevo Poeta Lugones”, “veterinaria en Córdoba”, “urgencias veterinarias en Córdoba”.
- **CONVERSIÓN**: El copy debe ser claro, directo, cercano y enfocado en resolver la urgencia de las mascotas enfermas. Prioriza un lenguaje que motive al contacto por WhatsApp.
- **FRASES CLAVE**: Incluir llamados a la acción potentes y términos que denoten confianza y urgencia profesional.

Genera {{{numVariations}}} variaciones para el elemento: {{{elementType}}}.
Contexto específico: {{{context}}}`,
});

const generateConversionCopyFlow = ai.defineFlow(
  {
    name: 'generateConversionCopyFlow',
    inputSchema: GenerateConversionCopyInputSchema,
    outputSchema: GenerateConversionCopyOutputSchema,
  },
  async (input) => {
    const {output} = await copywritingPrompt(input);
    return output!;
  }
);
