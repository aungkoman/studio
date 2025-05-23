'use server';
/**
 * @fileOverview An AI agent for generating testimonials.
 *
 * - testimonialGenerator - A function that generates testimonials.
 * - TestimonialGeneratorInput - The input type for the testimonialGenerator function.
 * - TestimonialGeneratorOutput - The return type for the testimonialGenerator function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TestimonialGeneratorInputSchema = z.object({
  clientName: z.string().describe('The name of the client giving the testimonial.'),
  clientCompany: z.string().describe('The company of the client giving the testimonial.'),
  clientRole: z.string().describe('The role of the client giving the testimonial.'),
  serviceUsed: z.string().describe('The service that the client used.'),
  projectOutcome: z.string().describe('The outcome or results of the project.'),
  tone: z.string().describe('The tone of the testimonial (e.g., professional, enthusiastic, friendly).').optional(),
});
export type TestimonialGeneratorInput = z.infer<typeof TestimonialGeneratorInputSchema>;

const TestimonialGeneratorOutputSchema = z.object({
  testimonial: z.string().describe('The generated testimonial.'),
});
export type TestimonialGeneratorOutput = z.infer<typeof TestimonialGeneratorOutputSchema>;

export async function testimonialGenerator(input: TestimonialGeneratorInput): Promise<TestimonialGeneratorOutput> {
  return testimonialGeneratorFlow(input);
}

const prompt = ai.definePrompt({
  name: 'testimonialGeneratorPrompt',
  input: {schema: TestimonialGeneratorInputSchema},
  output: {schema: TestimonialGeneratorOutputSchema},
  prompt: `You are an AI assistant specializing in generating compelling testimonials.

  Based on the information provided, create a testimonial that highlights the positive impact of the service on the client's business.

  Client Name: {{{clientName}}}
  Client Company: {{{clientCompany}}}
  Client Role: {{{clientRole}}}
  Service Used: {{{serviceUsed}}}
  Project Outcome: {{{projectOutcome}}}
  Tone: {{{tone}}}

  Write a testimonial that is engaging, authentic, and showcases client satisfaction. The testimonial should emphasize the value and benefits that the client received from the service provided by Tech Software 100.
  Do not include any links to external sources or contact information in the generated testimonial.
  `,
});

const testimonialGeneratorFlow = ai.defineFlow(
  {
    name: 'testimonialGeneratorFlow',
    inputSchema: TestimonialGeneratorInputSchema,
    outputSchema: TestimonialGeneratorOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
