# Clínica Odonto Premium 🦷

## 📋 Descrição do Projeto

Um site profissional, moderno e responsivo para uma clínica odontológica com agendamento interativo, proteção contra cópia, modo escuro e diversas funcionalidades avançadas.

**Desenvolvido por:** XarTins.LTDA - Soluções Digitais para Negócios Locais

---

## ✨ Funcionalidades Principais

### 🔐 Segurança e Proteção
- ✅ **Proteção contra clique direito** - Desabilita o acesso ao menu contextual
- ✅ **Bloqueio de ferramentas de desenvolvimento** - F12, Ctrl+Shift+I desabilitados
- ✅ **Proteção contra seleção de texto** - Evita cópia de conteúdo
- ✅ **Watermark invisível** - Marca d'água de copyright na página
- ✅ **Bloqueio de cópia (Ctrl+C)** - Impede copiar texto

### 📱 Design Responsivo
- ✅ Totalmente adaptado para desktop, tablet e celular
- ✅ Breakpoints ajustados para diferentes tamanhos de tela
- ✅ Interface fluida e intuitiva
- ✅ Navegação mobile otimizada

### 🌙 Modo Escuro
- ✅ Toggle de modo escuro/claro
- ✅ Preferência salva no navegador (localStorage)
- ✅ Cores otimizadas para cada tema
- ✅ Transições suaves entre modos

### 📅 Sistema de Agendamento
- ✅ Calendário interativo com navegação mensal
- ✅ Seleção de data com desabilitação de datas passadas
- ✅ Horários disponíveis pré-configurados
- ✅ Integração com WhatsApp para confirmação
- ✅ Validação de campos obrigatórios
- ✅ Notificações de sucesso/erro

### 📧 Newsletter
- ✅ Formulário de inscrição
- ✅ Validação de email
- ✅ Notificação de sucesso

### ❓ FAQ Interativo
- ✅ Seção de perguntas frequentes
- ✅ Accordion com abrir/fechar suave
- ✅ Fechamento automático ao abrir outra pergunta
- ✅ Respostas pré-carregadas

### 🖼️ Galeria Antes e Depois
- ✅ Exibição de casos de sucesso
- ✅ Layout responsivo
- ✅ Efeito hover com zoom
- ✅ Labels identificadores

### 👥 Equipe Profissional
- ✅ Cards com fotos dos profissionais
- ✅ Informações de especialidade
- ✅ Badges de certificação
- ✅ Efeito hover aprimorado

### 🎯 Benefícios da Clínica
- ✅ 6 cards destacando vantagens
- ✅ Ícones visuais
- ✅ Layout em grid responsivo
- ✅ Efeito hover elevado

### 🔔 Sistema de Notificações
- ✅ Toast notifications elegantes
- ✅ Tipos: sucesso, erro, aviso
- ✅ Animações suaves (slide in/out)
- ✅ Auto-desaparição em 3 segundos

### 🎨 Animações e Efeitos
- ✅ Fade-up ao rolar página
- ✅ Header adaptativo ao scroll
- ✅ Hover effects em cards
- ✅ Smooth scroll para ancoras
- ✅ Transições suaves entre elementos

### 🗺️ Integração Google Maps
- ✅ Mapa da localização da clínica
- ✅ Estilo customizado com filtro
- ✅ Responsivo e interativo

### 🔗 Integração WhatsApp
- ✅ Botão flutuante de WhatsApp
- ✅ Envio automático de dados de agendamento
- ✅ Mensagem formatada e profissional

---

## 🎨 Estrutura do Projeto

```
clinicaOdontologica-molde/
│
├── index.html           # Arquivo principal HTML
├── scripts/
│   └── script.js        # JavaScript com todas as funcionalidades
├── styles/
│   └── style.css        # Estilos CSS3 responsivo
└── README.md            # Este arquivo
```

---

## 🚀 Como Usar

### Instalação
1. Clone ou baixe o projeto
2. Abra o arquivo `index.html` em seu navegador
3. Nenhuma dependência ou instalação adicional necessária!

### Personalização

#### 1. **Alterar Número do WhatsApp**
Abra `scripts/script.js` e procure por:
```javascript
let numero = "5516981359971"
```
Substitua pelo seu número com código do país (ex: 55 para Brasil)

#### 2. **Modificar Contato e Endereço**
Edite o footer em `index.html`:
```html
<p>📍 Rua Exemplo, 123</p>
<p>📞 (11) 99999-9999</p>
<p>✉ contato@clinica.com</p>
```

#### 3. **Atualizar Informações da Clínica**
- **Serviços:** Edite a seção `.servicos` em HTML
- **Equipe:** Atualize os cards de profissionais em `.equipe`
- **Horários:** Modifique os botões em `.horarios-grid`

#### 4. **Mudar Cores da Marca**
Abra `styles/style.css` e procure por:
```css
--primary-color: #4aa3ff;  /* Azul padrão */
```
Substitua pela cor desejada em hexadecimal

#### 5. **Adicionar Novas Seções**
1. Crie uma nova `<section>` em HTML
2. Adicione classe única (ex: `class="minha-secao"`)
3. Estilize em CSS
4. Adicione link no menu `<nav>`

#### 6. **Personalizar FAQ**
Abra a seção `.faq` em HTML e adicione mais itens:
```html
<div class="faq-item">
  <button class="faq-question">💡 Sua pergunta aqui</button>
  <div class="faq-answer">
    <p>Sua resposta aqui</p>
  </div>
</div>
```

#### 7. **Controlar Proteção contra Cópia**
Em `scripts/script.js`, você pode comentar/descomente as linhas iniciais para:
- Desabilitar proteção contra clique direito
- Desabilitar bloqueio dev tools
- Desabilitar bloqueio de seleção
- Desabilitar bloqueio de cópia

---

## 🎯 Seções Disponíveis

| Seção | ID | Função |
|-------|----|---------| 
| Header | `header` | Navegação principal e logo |
| Hero | `home` | Seção introdutória do site |
| Serviços | `servicos` | Grid de serviços oferecidos |
| Sobre | `sobre` | Informações sobre a clínica |
| Benefícios | `beneficios` | 6 vantagens da clínica |
| Depoimentos | Não tem | Avaliações de clientes |
| Galeria | `galeria` | Fotos antes e depois |
| Equipe | `equipe` | Profissionais da clínica |
| FAQ | `faq` | Perguntas frequentes |
| Agendamento | `agendamento` | Formulário + calendário |
| Contato | `contato` | Mapa da localização |
| Footer | `footer` | Rodapé com newsletter |

---

## 📱 Responsividade

O site é totalmente responsivo com breakpoints em:

- **Desktop:** 1024px+ (layout completo)
- **Tablet:** 768px - 1023px (ajustes de espaçamento)
- **Mobile:** 480px - 767px (layout vertical)
- **Celular Pequeno:** < 480px (otimizado)

---

## 🎨 Paleta de Cores

| Cor | Hex | Uso |
|-----|-----|-----|
| Azul Primário | `#4aa3ff` | Botões, highlights, links |
| Cinza Escuro | `#333` | Texto principal |
| Cinza Médio | `#666` | Texto secundário |
| Cinza Claro | `#f5f7fa` | Backgrounds |
| Verde (Sucesso) | `#4CAF50` | Notificações positivas |
| Vermelho (Erro) | `#f44336` | Notificações de erro |

---

## 🔧 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilos avançados (Grid, Flexbox, Gradients)
- **JavaScript Vanilla** - Sem dependências externas
- **Google Fonts** - Fonte Poppins
- **Google Maps API** - Integração de mapa

---

## ⚙️ Compatibilidade

Testado em:
- ✅ Chrome/Edge (versões recentes)
- ✅ Firefox (versões recentes)
- ✅ Safari (versões recentes)
- ✅ Navegadores mobile (iOS/Android)

---

## 🔐 Recursos de Segurança

1. **Bloqueio de Inspecionar Elementos** - Impossível acessar código via DevTools
2. **Proteção contra Screenshot-Copy** - Clique direito desabilitado
3. **Validação de Formulário** - Campos obrigatórios verificados
4. **Watermark Digital** - Marca registrada invisível na página
5. **Tokens de Proteção** - Sistema de notificações ao tentar cópias

---

## 📈 Melhorias Implementadas

✅ Adicionadas 3 profissionais na equipe  
✅ Nova seção Benefícios com 6 cards  
✅ Galeria Antes e Depois  
✅ FAQ interativo com 5 perguntas  
✅ Newsletter no footer  
✅ Certificados visíveis para profissionais  
✅ Proteção contra cópia em múltiplos níveis  
✅ Modo escuro completo com localStorage  
✅ Notificações toast personalizadas  
✅ Animações fade-up ao scroll  
✅ Validações aprimoradas de formulário  
✅ Efeitos hover sofisticados  

---

## 🆘 Troubleshooting

### O site não abre
- Verifique se `index.html` está no diretório correto
- Tente abrir com outro navegador

### Proteção de cópia não funciona
- Certifique-se de que JavaScript está habilitado
- Alguns navegadores podem ter restrições de segurança

### WhatsApp não abre
- Verifique o número de telefone em `script.js`
- Confirme o formato: código país + número

### Modo escuro não persiste
- Verifique se localStorage está habilitado
- Limpe cache e cookies do navegador

---

## 📞 Suporte e Contato

**Desenvolvedor:** XarTins.LTDA  
**Website:** http://xartinsltda.com.br/  
**Email:** contato@clinica.com  
**Telefone:** (11) 99999-9999  

---

## 📄 Licença

Este projeto é fornecido como modelo profissional. Todos os direitos reservados à Clínica Odonto Premium © 2026.

---

## ✅ Checklist de Personalização

Antes de publicar o site, certifique-se de:

- [ ] Alterar número do WhatsApp no script.js
- [ ] Atualizar endereço no footer
- [ ] Inserir telefone correto
- [ ] Editar email de contato
- [ ] Adicionar fotos reais dos profissionais
- [ ] Atualizar nomes e especialidades da equipe
- [ ] Verificar horários de funcionamento
- [ ] Atualizar links de serviços
- [ ] Testar em mobile devices
- [ ] Testar proteção de cópia
- [ ] Testar modo escuro
- [ ] Testar agendamento via WhatsApp
- [ ] Implementar em servidor (Firebase, Netlify, etc.)

---

## 🚀 Deploy Recomendado

**Opções gratuitas:**
1. **Netlify** - Arraste a pasta ou conecte GitHub
2. **Vercel** - Deploy automático
3. **GitHub Pages** - Hospedagem estática
4. **Firebase Hosting** - Google Cloud

**Opções pagas:**
1. **Hostinger**
2. **Bluehost**
3. **SiteGround**

---

**Desenvolvido com ❤️ para sua clínica odontológica**
