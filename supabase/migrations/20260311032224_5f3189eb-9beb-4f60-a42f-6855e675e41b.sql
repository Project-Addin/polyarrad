
-- Step 1: Drop ALL policies that reference the old has_role(uuid, app_role)
DROP POLICY IF EXISTS "Admins can read roles" ON public.user_roles;
DROP POLICY IF EXISTS "Admins can read inquiries" ON public.contact_inquiries;
DROP POLICY IF EXISTS "Admins can update inquiries" ON public.contact_inquiries;
DROP POLICY IF EXISTS "Anyone can submit inquiry" ON public.contact_inquiries;

-- Step 2: Drop the old 2-arg function
DROP FUNCTION IF EXISTS public.has_role(uuid, app_role);

-- Step 3: Create new 1-arg has_role function (uses auth.uid() internally)
CREATE OR REPLACE FUNCTION public.has_role(_role app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = 'public'
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = auth.uid() AND role = _role
  )
$$;

-- Step 4: Recreate all policies as PERMISSIVE using new function signature
CREATE POLICY "Anyone can submit inquiry"
  ON public.contact_inquiries FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Admins can read inquiries"
  ON public.contact_inquiries FOR SELECT
  TO authenticated
  USING (public.has_role('admin'::app_role));

CREATE POLICY "Admins can update inquiries"
  ON public.contact_inquiries FOR UPDATE
  TO authenticated
  USING (public.has_role('admin'::app_role));

CREATE POLICY "Admins can read roles"
  ON public.user_roles FOR SELECT
  TO authenticated
  USING (public.has_role('admin'::app_role));
