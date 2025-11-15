import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-10 animate-gradient bg-[length:200%_200%]" />
        
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
              Воплощаем идеи в реальность
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Инновационные решения для вашего бизнеса. Быстро. Качественно. Современно.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                Начать проект
                <Icon name="Rocket" className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2">
                Узнать больше
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Почему выбирают нас
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 animate-scale-in bg-gradient-to-br from-primary/5 to-transparent">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center mb-6">
                <Icon name="Zap" size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Молниеносная скорость</h3>
              <p className="text-muted-foreground text-lg">
                Запускаем проекты в рекордные сроки благодаря современным технологиям
              </p>
            </Card>

            <Card className="p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 animate-scale-in [animation-delay:150ms] bg-gradient-to-br from-secondary/5 to-transparent">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-secondary to-accent flex items-center justify-center mb-6">
                <Icon name="Target" size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Точное попадание</h3>
              <p className="text-muted-foreground text-lg">
                Решения, которые идеально соответствуют вашим бизнес-целям
              </p>
            </Card>

            <Card className="p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 animate-scale-in [animation-delay:300ms] bg-gradient-to-br from-accent/5 to-transparent">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-accent to-primary flex items-center justify-center mb-6">
                <Icon name="Shield" size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Надёжная защита</h3>
              <p className="text-muted-foreground text-lg">
                Безопасность и стабильность на всех уровнях архитектуры
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-5" />
        
        <div className="container mx-auto px-4 relative z-10">
          <Card className="max-w-4xl mx-auto p-12 md:p-16 text-center bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Готовы начать?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Присоединяйтесь к сотням довольных клиентов, которые уже трансформировали свой бизнес вместе с нами
            </p>
            <Button size="lg" className="text-lg px-10 py-7 bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 transition-opacity">
              Связаться с нами
              <Icon name="Send" className="ml-2" size={20} />
            </Button>
          </Card>
        </div>
      </section>

      <footer className="py-12 border-t">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p className="text-lg">© 2024 Ваш Стартап. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
