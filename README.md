# 🚀 Inno Tec - Landing Page

Redesign completo de landing page para **Inno Tec Distribuição e Comércio**, distribuidora especializada em equipamentos de telefonia e comunicação.

## 📋 Sobre o Projeto

Landing page single-page responsiva desenvolvida em **3 ciclos sequenciais**:
- **Ciclo 0:** Planejamento e análise
- **Ciclo 1:** Alterações básicas (identidade visual, header, footer)
- **Ciclo 2:** Adição de seção de produtos
- **Ciclo 3:** Finalizações e testes

## 🎯 Características

✅ **Identidade Visual Completa**
- Logo: "Inno Tec" em azul corporativo (#0066cc)
- Paleta reformulada (Orange → Azul Inno Tec)
- Consistência visual em todos elementos

✅ **Informações Corporativas Integradas**
- CNPJ: 63.735.164/0001-87
- Endereço: Rua da Maçonaria, 90, Sala 105, Castelo/ES
- Contatos: (33) 8464-1129 | K2.IMPORTS@ICLOUD.COM
- Footer com 3 colunas de dados estruturados

✅ **Seção de Produtos (6 itens)**
- iPhone 17 Pro Max
- iPhone 17 Pro
- iPhone 17
- iPhone 16
- iPhone 15
- JBL Boombox 4

Grid responsivo: 3 colunas (desktop) → 2 (tablet) → 1 (mobile)

✅ **Funcionalidades**
- Smooth scroll entre seções
- Animações GSAP com ScrollTrigger
- Header responsivo (shrink on scroll)
- Links WhatsApp funcional
- Formulário de contato simplificado

## 📱 Responsividade

| Device | Resolução | Breakpoint |
|--------|-----------|-----------|
| Desktop | >992px | 3 colunas |
| Tablet | 768-992px | 2 colunas |
| Mobile | <768px | 1 coluna |

## 🛠️ Estrutura Técnica

**Tecnologias:**
- HTML5
- CSS3 (650+ linhas)
- JavaScript (GSAP + ScrollTrigger)
- Font Awesome (ícones)
- Google Fonts (Poppins)

**Arquivos:**
```
├── index.html          # Estrutura (235 linhas)
├── style.css           # Estilos (650+ linhas)
├── script.js           # Animações (50+ linhas)
├── .gitignore          # Ignora /innotec_docs
└── innotec_docs/       # Documentação (não versionado)
```

## 📚 Documentação

Acesse `/innotec_docs/` para documentação completa:
- `PLANO_ACAO.md` - Plano geral do projeto
- `ciclo_0.md` - Planejamento
- `ciclo_1.md` - Alterações básicas
- `ciclo_2.md` - Seção de produtos
- `ciclo_3.md` - Finalizações
- `RESUMO_EXECUTIVO.md` - Resumo executivo

## 🚀 Como Usar

### Abrir localmente
```bash
cd /home/erick/Trabalhos/Innotec/Leanding-Page-InnoTec
open index.html
# ou
firefox index.html
```

### Git - Histórico
```bash
# Ver commits do projeto
git log --oneline

# Ver detalhes de um ciclo
git show fb66375  # Ciclo 1
git show faef66b  # Ciclo 2
git show 2bc2d96  # Ciclo 3
```

## 📊 Estatísticas

| Métrica | Valor |
|---------|-------|
| Total de linhas HTML | 235 |
| Total de linhas CSS | 650+ |
| Seções | 7 |
| Produtos | 6 |
| Commits principais | 3 |
| Tempo de desenvolvimento | 1 sessão (3 ciclos) |

## 🎨 Paleta de Cores

```css
--primary: #0066cc;      /* Azul Inno Tec */
--primary-dark: #0052a3; /* Azul escuro (hover) */
--black: #1A1A1A;        /* Escuro */
--gray: #333;            /* Cinza */
--light-gray: #f5f5f5;   /* Claro */
--white: #ffffff;        /* Branco */
```

## 🔗 Links Importantes

**Contato Inno Tec:**
- 📱 WhatsApp: https://wa.me/5533984641129
- 📧 Email: K2.IMPORTS@ICLOUD.COM
- 📍 Endereço: Rua da Maçonaria, 90, Sala 105, Castelo/ES

## ✅ Checklist de Aceitação

- [x] Landing page renderiza sem erros
- [x] Identidade Inno Tec aplicada
- [x] 6 produtos listados
- [x] Dados fiscais completos
- [x] Responsivo (desktop/tablet/mobile)
- [x] Animações GSAP ativas
- [x] Links testados
- [x] Documentação completa
- [x] Commits organizados

## 📞 Suporte

Para dúvidas ou ajustes:
- Consulte documentação em `/innotec_docs/`
- Verifique histórico Git para entender mudanças
- Teste responsividade em diferentes devices

---

**Desenvolvido:** 18 de dezembro de 2025  
**Status:** ✅ Pronto para produção  
**Responsável:** GitHub Copilot (Claude Haiku)
