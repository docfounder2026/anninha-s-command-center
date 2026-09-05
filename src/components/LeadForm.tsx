import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { openWhatsApp } from "@/lib/anninha";

const WORK_TYPES = ["Construção", "Reforma", "Apartamento", "Casa", "Comercial", "Outro"];
const WORK_STAGES = [
  "Planejamento",
  "Fundação / estrutura",
  "Alvenaria",
  "Instalações",
  "Acabamento",
  "Reforma em andamento",
  "Outro",
];

export function LeadForm() {
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    cidade: "",
    tipo: "",
    etapa: "",
    dificuldade: "",
    presencial: false,
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Estrutura pronta para integração futura (ex.: salvar o lead no backend).
    const message = [
      "Olá, Anninha! Conheci a ANNINHA CONSTRUÇÕES pelo site.",
      `Meu nome é ${form.nome}.`,
      `Minha obra fica em ${form.cidade}.`,
      `Tipo de obra: ${form.tipo}.`,
      `Etapa atual: ${form.etapa}.`,
      `Minha maior dificuldade hoje é: ${form.dificuldade}.`,
      form.presencial ? "Tenho interesse em acompanhamento presencial." : "",
      "Gostaria de entender qual plano é mais indicado.",
    ]
      .filter(Boolean)
      .join("\n");

    openWhatsApp(message);
  }

  return (
    <section id="formulario" className="py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Fale com a Anninha"
          title="Conte sobre a sua obra"
          description="Preencha os campos abaixo e continue a conversa pelo WhatsApp."
        />

        <Reveal className="mx-auto mt-12 max-w-2xl">
          <form
            onSubmit={handleSubmit}
            className="grid gap-5 rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="nome">Nome</Label>
                <Input
                  id="nome"
                  required
                  autoComplete="name"
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="telefone">Telefone / WhatsApp</Label>
                <Input
                  id="telefone"
                  type="tel"
                  required
                  autoComplete="tel"
                  value={form.telefone}
                  onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                />
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="cidade">Cidade</Label>
              <Input
                id="cidade"
                required
                autoComplete="address-level2"
                value={form.cidade}
                onChange={(e) => setForm({ ...form, cidade: e.target.value })}
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="tipo">Tipo da obra</Label>
                <Select
                  value={form.tipo}
                  onValueChange={(value) => setForm({ ...form, tipo: value })}
                  required
                >
                  <SelectTrigger id="tipo" aria-label="Tipo da obra">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    {WORK_TYPES.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="etapa">Etapa da obra</Label>
                <Select
                  value={form.etapa}
                  onValueChange={(value) => setForm({ ...form, etapa: value })}
                  required
                >
                  <SelectTrigger id="etapa" aria-label="Etapa da obra">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    {WORK_STAGES.map((stage) => (
                      <SelectItem key={stage} value={stage}>
                        {stage}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="dificuldade">Qual é sua maior dificuldade hoje?</Label>
              <Textarea
                id="dificuldade"
                rows={4}
                required
                value={form.dificuldade}
                onChange={(e) => setForm({ ...form, dificuldade: e.target.value })}
              />
            </div>

            <div className="flex items-start gap-3">
              <Checkbox
                id="presencial"
                checked={form.presencial}
                onCheckedChange={(checked) => setForm({ ...form, presencial: checked === true })}
              />
              <Label htmlFor="presencial" className="text-sm font-normal leading-snug">
                Tenho interesse em acompanhamento presencial.
              </Label>
            </div>

            <Button type="submit" size="lg" className="h-14 w-full text-base">
              <Send aria-hidden="true" />
              Quero falar com a Anninha
            </Button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
