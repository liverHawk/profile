#!/usr/bin/env node

/**
 * StackRef CLI Link Helper
 * Usage: node scripts/add_perk.js
 * Validates new tool entries and provides template output for src/components/stackref/data/tools.ts
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const VALID_CATEGORIES = ['productivity', 'security', 'devtools', 'cloud'];
const VALID_ICONS = ['terminal', 'shield', 'code', 'prompt', 'checklist', 'database', 'key', 'cloud'];

export function validateTool(tool) {
  const errors = [];
  if (!tool.id || typeof tool.id !== 'string') errors.push('Missing or invalid id (must be lowercase string)');
  if (!tool.name) errors.push('Missing tool name');
  if (!VALID_CATEGORIES.includes(tool.category)) errors.push(`Invalid category: ${tool.category}. Must be one of: ${VALID_CATEGORIES.join(', ')}`);
  if (!tool.referralUrl || !tool.referralUrl.startsWith('http')) errors.push('Missing or invalid referralUrl (must start with http:// or https://)');
  if (!tool.perkTitle) errors.push('Missing perkTitle');
  if (!VALID_ICONS.includes(tool.iconType)) errors.push(`Invalid iconType: ${tool.iconType}. Must be one of: ${VALID_ICONS.join(', ')}`);
  return errors;
}

console.log('✨ StackRef Add-Perk Skill Helper loaded.');
console.log('Review skills/add-perk-link/SKILL.md for complete instructions and curation standards.');
