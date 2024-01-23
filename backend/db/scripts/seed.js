/* eslint-disable no-underscore-dangle */
import { connection } from 'mongoose';
import connectDB from '..';
import {
  User, Theme, Exercise, Favorite, UserExercise,
} from '../models';

// Définir ExerciseType
const ExerciseType = {
  TEXT: 'TEXT',
  TABLE: 'TABLE',
  VIDEO: 'VIDEO',
};

// Définir TextContent
class TextContent {
  constructor(content) {
    this.content = content;
  }
}

const seed = async () => {
  console.log('Nettoyage de la base de données');

  await connectDB();
  await connection.dropDatabase();

  console.log('Base de données nettoyée');

  // Création des thèmes
  const themes = [
    new Theme({
      title: 'Gestion du stress',
      description: 'Exercices pour gérer le stress au quotidien',
      shortDescription: 'Exercices de gestion du stress',
      backgroundImage: 'plop',
    }),
    new Theme({
      title: 'Affirmations positives',
      description: 'Pratique d\'affirmations pour encourager la pensée positive',
      shortDescription: 'Encouragement de la pensée positive',
      backgroundImage: 'plop',
    }),
    new Theme({
      title: 'Résolution de problèmes',
      description: 'Exercices pour identifier et résoudre des problèmes',
      shortDescription: 'Identifier et résoudre les problèmes',
      backgroundImage: 'plop',
    }),
    new Theme({
      title: 'Mindfulness',
      description: 'Pratique de la pleine conscience et de la méditation',
      shortDescription: 'Pleine conscience et méditation',
      backgroundImage: 'plop',
    }),
  ];

  // Création des exercices
  const exercises = [
    new Exercise({
      title: 'Respiration consciente',
      description: 'Exercice de respiration pour se relaxer',
      shortDescription: 'Exercice de respiration',
      theme: themes[0]._id,
      type: ExerciseType.TEXT,
      content: new TextContent('Plop'),
      backgroundImage: 'url_de_l_image',
    }),
    new Exercise({
      title: 'Visualisation de relaxation',
      description: 'Exercice de visualisation pour se détendre',
      shortDescription: 'Exercice de visualisation',
      theme: themes[0]._id,
      type: ExerciseType.TEXT,
      content: new TextContent('Plop'),
      backgroundImage: 'url_de_l_image',
    }),
    new Exercise({
      title: 'Affirmations positives',
      description: 'Exercice pour développer les affirmations positives',
      shortDescription: 'Développer des affirmations positives',
      theme: themes[1]._id,
      type: ExerciseType.TEXT,
      content: new TextContent('Plop'),
      backgroundImage: 'url_de_l_image',
    }),
    new Exercise({
      title: 'Analyse de problème',
      description: 'Exercice d\'analyse pour résoudre des problèmes',
      shortDescription: 'Analyser les problèmes',
      theme: themes[2]._id,
      type: ExerciseType.TEXT,
      content: new TextContent('Plop'),
      backgroundImage: 'url_de_l_image',
    }),
    new Exercise({
      title: 'Méditation de pleine conscience',
      description: 'Exercice de méditation pour développer la pleine conscience',
      shortDescription: 'Développer la pleine conscience',
      theme: themes[3]._id,
      type: ExerciseType.TEXT,
      content: new TextContent('Plop'),
      backgroundImage: 'url_de_l_image',
    }),
    new Exercise({
      title: 'Exercice vidéo 1',
      description: 'Exercice vidéo pour la pratique de TCC',
      shortDescription: 'Exercice vidéo TCC',
      theme: themes[0]._id,
      type: ExerciseType.VIDEO,
      content: new TextContent('Plop'),
      backgroundImage: 'url_de_l_image',
    }),
    new Exercise({
      title: 'Exercice tableau 1',
      description: 'Exercice de tableau pour améliorer la concentration',
      shortDescription: 'Améliorer la concentration',
      theme: themes[1]._id,
      type: ExerciseType.TABLE,
      content: new TextContent('Plop'),
      backgroundImage: 'url_de_l_image',
    }),
  ];

  // Création de trois utilisateurs
  const users = [
    new User({ name: 'Utilisateur 1', email: 'user1@email.com', password: 'password' }),
    new User({ name: 'Utilisateur 2', email: 'user2@email.com', password: 'password' }),
    new User({ name: 'Utilisateur 3', email: 'user3@email.com', password: 'password' }),
  ];

  // Création des favoris pour chaque utilisateur
  const favorites = [
    new Favorite({ user: users[1]._id, exercise: exercises[0]._id }),
    new Favorite({ user: users[1]._id, exercise: exercises[1]._id }),
    new Favorite({ user: users[0]._id, exercise: exercises[2]._id }),
  ];

  // Création des utilisateurs exercices
  const userExercises = [
    new UserExercise({
      userId: users[0]._id,
      exerciseId: exercises[0]._id,
      entries: [{ completedData: [['10', '15', '20']], createdAt: new Date(), updatedAt: new Date() }],
    }),
    new UserExercise({
      userId: users[1]._id,
      exerciseId: exercises[1]._id,
      entries: [{ completedData: [['5', '12', '18']], createdAt: new Date(), updatedAt: new Date() }],
    }),
  ];

  // Sauvegarde des données
  const savings = [
    ...themes.map((theme) => theme.save()),
    ...exercises.map((exercise) => exercise.save()),
    ...users.map((user) => user.save()),
    ...favorites.map((favorite) => favorite.save()),
    ...userExercises.map((userExercise) => userExercise.save()),
  ];

  await Promise.all(savings);

  console.log('Base de données peuplée');

  connection.close();
};

seed();
