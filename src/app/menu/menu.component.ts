import { Component } from '@angular/core';

// Définir un type pour les éléments du menu
interface MenuItem {
  name: string;
  description: string;
  price: number;
}

// Définir un type pour les catégories
type CategoryId = 'taboule' | 'salades' | 'mezze' | 'plats';

interface Category {
  id: CategoryId;
  name: string;
  icon: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  categories: Category[] = [
    { id: 'taboule', name: 'Taboulé', icon: 'fa-solid fa-wheat-awn' },
    { id: 'salades', name: 'Salades', icon: 'fa-solid fa-leaf' },
    { id: 'mezze', name: 'Mezze', icon: 'fa-solid fa-plate-wheat' },
    { id: 'plats', name: 'Plats Principaux', icon: 'fa-solid fa-utensils' }
  ];
  
  activeCategory: CategoryId = 'taboule';
  
  menuItems: Record<CategoryId, MenuItem[]> = {
    taboule: [
      { name: 'Taboulé Libanais', description: 'Persil, menthe, tomates, oignons, boulgour fin, huile d\'olive et jus de citron', price: 8.50 },
      { name: 'Taboulé aux Fruits', description: 'Notre taboulé signature avec grenade, pomme et raisins secs', price: 9.50 },
      { name: 'Taboulé Quinoa', description: 'Version moderne avec quinoa, concombre, avocat et herbes fraîches', price: 10.50 },
      { name: 'Taboulé de Couscous', description: 'Couscous, légumes grillés, pois chiches et vinaigrette au citron', price: 9.00 }
    ],
    salades: [
      { name: 'Salade Fattoush', description: 'Laitue, tomates, concombre, radis, pain pita grillé, sumac et vinaigrette à la grenade', price: 9.50 },
      { name: 'Salade Méditerranéenne', description: 'Tomates, concombre, poivrons, olives, feta et vinaigrette au citron', price: 10.50 },
      { name: 'Salade de Lentilles', description: 'Lentilles vertes, carottes, oignons rouges, persil et vinaigrette aux épices', price: 8.50 },
      { name: 'Salade Halloumi Grillé', description: 'Roquette, fromage halloumi grillé, figues, noix et miel', price: 12.50 }
    ],
    mezze: [
      { name: 'Houmous', description: 'Purée de pois chiches crémeuse avec tahini et huile d\'olive', price: 6.50 },
      { name: 'Baba Ganoush', description: 'Caviar d\'aubergines fumées avec tahini et grenade', price: 7.50 },
      { name: 'Falafel', description: 'Boulettes de pois chiches épicées servies avec sauce tahini', price: 8.00 },
      { name: 'Labneh', description: 'Yaourt égoutté crémeux avec zaatar et huile d\'olive', price: 6.00 }
    ],
    plats: [
      { name: 'Shawarma Poulet', description: 'Poulet mariné aux épices, servi avec pain pita, sauce ail et pickles', price: 14.50 },
      { name: 'Kefta', description: 'Brochettes de bœuf haché aux herbes, servies avec riz et légumes grillés', price: 16.50 },
      { name: 'Moussaka Végétarienne', description: 'Aubergines, pommes de terre, sauce tomate et béchamel', price: 13.50 },
      { name: 'Couscous Royal', description: 'Couscous aux légumes, pois chiches et fruits secs', price: 15.00 }
    ]
  };
  
  setActiveCategory(categoryId: CategoryId) {
    this.activeCategory = categoryId;
  }
}
